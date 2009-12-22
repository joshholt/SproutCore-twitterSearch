// // ==========================================================================
// // Project:   Twitapp
// // Copyright: ©2009 (MRD)
// // Author: Josh Holt
// // ==========================================================================
// /*globals Twitapp */
// 
// /** @class
// 
//   This controller provides the tweets for the selected saved search.
// 
//   @extends SC.ArrayController
// */
// Twitapp.tweetsController = SC.ArrayController.create(
// /** @scope Twitapp.tweets.prototype */ {
//   
//   contentBinding: 'Twitapp.searchController.tweets',
//   
//   selectionDidChange: function() {
//     // TODO Implement unread count decrement.
//     
//     // var searchUnreadCount = Twitapp.searchController.get('unreadTweetsCount');
//     // if (searchUnreadCount && searchUnreadCount !== 0) {
//     //   Twitapp.searchController.set('unreadTweetsCount', searchUnreadCount - 1);
//     // }
//   }.observes('selection')
//   
// });
