// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitapp */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Twitapp.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  Twitapp.getPath('mainPage.mainPane').append() ;

  var tweets = Twitapp.store.find(Twitapp.TWEETS_QUERY);
  Twitapp.tweetsController.set('content',tweets);

} ;

function main() { Twitapp.main(); }
