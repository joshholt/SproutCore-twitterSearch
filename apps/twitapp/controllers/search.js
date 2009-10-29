// ==========================================================================
// Project:   Twitapp.searchController
// Copyright: ©2009 My Company, Inc.
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
