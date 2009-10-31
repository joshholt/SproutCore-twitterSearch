// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 (MRD)
// Author: Josh Holt
// ==========================================================================
/*globals Twitapp */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Twitapp.searchesController = SC.ArrayController.create(
/** @scope Twitapp.searchesController.prototype */ {
  allowsMultipleSelection: NO,
  allowsEmptySelection: NO,
  queryString: null,
  
  search: function() {
    var queryString = this.get('queryString');
    var savedQuerries = this.getEach('searchTerm');
    if (!queryString) return null;
    if (savedQuerries.indexOf(queryString) !== -1) return null;
    var rec = Twitapp.get('store').createRecord(Twitapp.Search,{searchTerm: queryString, unreadTweetsCount: 10});
    Twitapp.searchesController.selectObject(rec);
  }
  
});
