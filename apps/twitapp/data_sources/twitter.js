// ==========================================================================
// Project:   Twitapp.TwitterDataSource
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals unescape Twitapp */

sc_require('models/tweet');
Twitapp.TWEETS_QUERY = SC.Query.local(Twitapp.Tweet, { orderBy: 'id DESC', url: 'search.json?rpp=10&q=twitter' });

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Twitapp.TwitterDataSource = SC.DataSource.extend(
/** @scope Twitapp.TwitterDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {
    var url = query.get('url');
    // if (query === Twitapp.TWEETS_QUERY &&url) {
    if (url) {
      SC.Request.getUrl(url).json()
            .notify(this, 'didFetchTweets', store, query)
            .send();
          return YES;
    }
    return NO;
  },
  
  didFetchTweets: function(response, store, query) {
    if (SC.ok(response)) {
      var recs = response.get('body').results;
      for (var i=0; i < recs.length; i++) {
        recs[i].guid = recs.length - i;
        recs[i].searchTerm = unescape(response.get('body').query);
      }
      store.loadRecords(Twitapp.Tweet, recs);
      store.dataSourceDidFetchQuery(query);
    } else store.dataSourceDidErrorQuery(query, response);
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey) {
    
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  createRecord: function(store, storeKey) {
    var newId = store.find(Twitapp.Search).length();
    var datahash = store.readEditableDataHash(storeKey);
    datahash.guid = newId + 1;
    store.dataSourceDidComplete(storeKey,null,newId + 1);
    return YES;
  },
  
  updateRecord: function(store, storeKey) {
    
    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },
  
  destroyRecord: function(store, storeKey) {
    
    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done
    
    return NO ; // return YES if you handled the storeKey
  }
  
}) ;
