// ==========================================================================
// Project:   Twitapp.TweetView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitapp */

/** @class

  This view will represent one tweet in the list of tweets.
  This view expects content.

  @extends SC.View
  @author Josh Holt
*/
Twitapp.TweetView = SC.View.extend(SC.Control,
/** @scope Twitapp.TweetView.prototype */ {
  
  content: null,
  
  createChildViews: function(){
    var content = this.get('content');
    var view, views = [], that = this;
    
    this.avatarView = view = this.createChildView(SC.ImageView.design({
      layout: { centerY: 0, left: 5, height: 48, width: 48},
      content: that.get('content'),
      contentValueKey: 'profile_image_url',
      canLoadInBackground: YES
    }));
    views.push(view);

    this.messageView = view = this.createChildView(SC.LabelView.design({
      layout: { top: 10, left: 63, right: 5, bottom: 5 },
      content: that.get('content'),
      contentValueKey: 'text'
    }));
    views.push(view);
    this.set('childViews',views);
    return sc_super();
  }
  
});
