// ==========================================================================
// Project:   Twitapp.Search
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals escape Twitapp */

/** @class

  This model represents a saved search.

  @extends SC.Record
  @version 0.1
*/
Twitapp.Search = SC.Record.extend(
/** @scope Twitapp.Search.prototype */ {
  
  searchTerm: SC.Record.attr(String),
  unreadTweetsCount: SC.Record.attr(Number),
  tweets: function() {
      var query = this._query;
      var searchTerm = this.get('searchTerm');
      if (!query && searchTerm) {
        query = this._query = SC.Query.local(Twitapp.Tweet, { 
              conditions: "searchTerm = {searchterm}", 
              orderBy: 'id DESC', 
              parameters: {searchterm: searchTerm}, 
              url: 'search.json?rpp=10&q=%@'.fmt(escape(searchTerm)) });
      }

      return this.get('store').find(query);
   }.property().cacheable()

}) ;
