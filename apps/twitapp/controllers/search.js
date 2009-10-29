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
  
  contentBinding: 'Twitapp.searchesController.selection',
  contentBindingDefault: SC.Binding.single()
  
}) ;
