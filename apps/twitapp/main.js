// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 (MRD)
// Author: Josh Holt
// ==========================================================================
/*globals openDatabase Twitapp */

Twitapp.main = function main() {
  
  Twitapp.initDataBase();

  // Display the contents of the main page.
  Twitapp.getPath('mainPage.mainPane').append();

  // var tweets = Twitapp.store.find(Twitapp.TWEETS_QUERY);
  // Twitapp.tweetsController.set('content',tweets);
  Twitapp.SEARCHES_QUERY = SC.Query.local(Twitapp.Search, { orderBy: 'searchTerm ASC' });
  
  // Now load the data.
  if (Twitapp.db) {
    Twitapp.loadDatabase();
  } else {
    var hasUserDefaults = Twitapp.getPath('userDefaults.savedSearches');
    if (!hasUserDefaults) {
      Twitapp.userDefaults.defaults({
        "TwitappUserDefaults:savedSearches": [{"searchTerm":"sproutcore","unreadTweetsCount":10,"guid":1}]
      });
    }
    Twitapp.loadUserDefaults();
    Twitapp.loadFixtures();
  }
};

// Tries to start the db for client-side storage.  If this works it will set
// Twitapp.db.
Twitapp.initDataBase = function(){
  // If DB storage is supported, use it.
  try {
    if (window.openDatabase) {
      Twitapp.db = openDatabase("Twitapp.SearchStore", "1.0", "Twitapp Searches Store", 200000) ;
      if (!Twitapp.db){
        console.log("Failed to open database on disk.  Probably because the version was bad or the quota is exceeded.  Will proceed with fixture data.");
      }
    } else {
      console.log("This browser does not support HTML5 client side storage.  Will proceed with fixture data.") ;
    }
  } catch(err) {}
};

// Tries to load data from the database.  If no data is found, loads fixtures.
Twitapp.loadDatabase = function() {
  // determine if the table already exists...
  Twitapp.db.transaction(function(tx) {
    tx.executeSql("SELECT COUNT(*) FROM TwitappStoreData", [],
 
    // success! -- load the data unless the count is 0....
    function(tx, result) {
      Twitapp.restoreRecordsFromDatabase();
 
    // table does not yet exist...build it...
    }, function(tx, error) {
      tx.executeSql("CREATE TABLE TwitappStoreData (id REAL UNIQUE, json TEXT)", [], function() {
        Twitapp.loadFixtures();
 
        // also dump initial data...
        var recs = Twitapp.get('store').find(Twitapp.Search).invoke('get','attributes');
        var str = SC.json.encode(recs);
        tx.executeSql("INSERT INTO TwitappStoreData (id, json) VALUES (?, ?)", [1, str]);
        Twitapp.setPath('store.dataSource', 'Twitapp.TwitterDataSource');
      }) ;
    });
  }) ;
} ;

// Load up the user defaults if the HTML5 DB does not exist.
Twitapp.loadUserDefaults = function() {
  Twitapp.restroreRecordsFromUserDefaults();
};

// Actually restores the records from the database...
Twitapp.restoreRecordsFromDatabase = function() {
  if (!Twitapp.db) return ;
  Twitapp.db.transaction(function(tx) {
    tx.executeSql("SELECT id, json FROM TwitappStoreData", [],
 
    // success! process records...
    function(tx, result) {
 
      if (result.rows.length >= 1) {
        var json = result.rows.item(0)["json"] ;
        var recs = eval(json) ;
        Twitapp.get('store').loadRecords(Twitapp.Search,recs);
        console.log('loaded data from HTML5 DB');
        console.log('activating twittersearch data-source');
        Twitapp.setPath('store.dataSource', 'Twitapp.TwitterDataSource');
        Twitapp.startApplication() ;
      } else Twitapp.loadFixtures() ;
 
    // major fail...
    }, function(tx, error) {
      Twitapp.loadFixtures() ;
    });
  });
};

// Restores the records from user defaults.
Twitapp.restroreRecordsFromUserDefaults = function() {
  var json = Twitapp.getPath('userDefaults.savedSearches');
  var recs = eval(json);
  if (recs) {
    Twitapp.get('store').loadRecords(Twitapp.Search,recs);
    console.log('loaded data from UserDefaults');
    console.log('activating twittersearch data-source');
    Twitapp.setPath('store.dataSource', 'Twitapp.TwitterDataSource');
    Twitapp.startApplication();
  }else{
    Twitapp.loadFixtures();
  }
};

// Actually saves the records to HTML5 DB
Twitapp.dumpRecordsToDatabase = function() {
  if (!Twitapp.db) return ;
  var recs = Twitapp.get('store').find(Twitapp.Search).invoke('get','attributes');
  var str = SC.json.encode(recs);
  Twitapp.db.transaction(function(tx) {
    tx.executeSql("UPDATE TwitappStoreData SET json = ? WHERE id = ?", [str,1]) ;
  });
};

// Actually saves the records to HTML5 DB
Twitapp.dumpRecordsToUserDefaults = function() {
  if (!Twitapp.userDefaults) return ;
  var recs = Twitapp.get('store').find(Twitapp.Search).invoke('get','attributes');
  var str = SC.json.encode(recs);
  Twitapp.setPath('userDefaults.savedSearches',str);
};

Twitapp.startApplication = function() {
  var searches = Twitapp.get('store').find(Twitapp.SEARCHES_QUERY);
  Twitapp.searchesController.set('content',searches);
  Twitapp.setPath('store.dataSource', 'Twitapp.TwitterDataSource');
  Twitapp.mainPage.mainPane.containerView.searchView.searchField.becomeFirstResponder();
};
 
Twitapp.loadFixtures = function() {
  Twitapp.setPath('store.dataSource', SC.Record.fixtures);
  Twitapp.startApplication();
};

function main() { Twitapp.main(); }
