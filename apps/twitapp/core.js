// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitapp escape */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/

Twitapp = SC.Application.create(
  /** @scope Twitapp.prototype */ {

  NAMESPACE: 'Twitapp',
  VERSION: '0.1.0',

  // Fixtures data-source
  store: SC.Store.create({commitRecordsAutomatically: YES})//.from(SC.Record.fixtures)
  // Twitter Search data-source
  // store: SC.Store.create().from('Twitapp.TwitterDataSource')

});