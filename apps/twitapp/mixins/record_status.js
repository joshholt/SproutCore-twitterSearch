//============================================================================
// Twitapp.RecordStatus
//============================================================================
/*globals Twitapp*/
/**

  Record Status Observer
  @author Josh Holt

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