// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 (MRD)
// Author: Josh Holt
// ==========================================================================
/*globals Twitapp escape */
sc_require('mixins/record_status');
/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Twitapp.searchController = SC.ObjectController.create(Twitapp.RecordStatus,
/** @scope Twitapp.searchController.prototype */ {
  
  contentBinding: 'Twitapp.searchesController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  refreshSearch: function() {
    this.get('tweets').refresh();
  },
  
  recordStatusDidChange: function(status) {
    var content = this.get('content');
    // console.log('search:(%@), status:(%@)'.fmt(content.get('searchTerm'),status));
    if (status & SC.Record.READY_CLEAN) {
      if (Twitapp.db) {
       Twitapp.dumpRecordsToDatabase(); 
      }
    }
  }
  
}) ;
