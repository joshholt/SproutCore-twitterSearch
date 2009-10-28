// ==========================================================================
// Project:   Twitapp.searchController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitapp escape */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Twitapp.searchController = SC.ObjectController.create(
/** @scope Twitapp.searchController.prototype */ {
  
  queryString: null,
  
  search: function() {
    var queryString = this.get('queryString');
    if (!queryString) return null;
    var content = Twitapp.tweetsController.get('content');
    if (content ) {
     content.setPath('query.url','search.json?rpp=10&q=%@'.fmt(escape(queryString)));
     content.refresh(); 
    }
  }
  

}) ;
