// ==========================================================================
// Project:   Twitapp
// Copyright: ©2009 (MRD)
// Author: Josh Holt
// ==========================================================================
/*globals Twitapp*/

/** @mixin

  Record Status Observer Mixin.
  
  This mixin provides you with the ability to hook into the status of records
  being saved, destroyed, updated, etc.. and then do some other action based 
  on the status of the record.. 
  
  Normaly you would mixin this into one of your controllers and then implement
  the recordStatusDidChange method.
  
  Here is an example of it's usage:
  
  {{{
  
    // This implementation checks for the record to be in a ready_clean state
    // and then fires off the method to all records to the HTML5 DB.
    
    recordStatusDidChange: function(status) {
      var content = this.get('content');
      if (status & SC.Record.READY_CLEAN) {
        if (MyApp.db) {
         MyApp.dumpRecordsToDatabase(); 
        }
      }
    }
  
  }}}

*/

Twitapp.RecordStatus = {
 
 initMixin: function(){
   if (this.addObserver) {
     this.addObserver('content.status',this,this._rec_status_changed);
   }
 },
 
 recordStatusDidChange: function(status){
   
 },
 
 _rec_status_changed: function(){
   var status, content;
   if (this.get && this.get('content')) content = this.get('content'); 
   if (content && content.get) status = content.get('status');
   if (status && this.recordStatusDidChange) this.recordStatusDidChange(status);
 }
  
};