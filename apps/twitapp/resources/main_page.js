// ==========================================================================
// Project:   Twitapp - mainPage
// Copyright: ©2009 My Company, Inc.
// @author: Josh Holt
// ==========================================================================
/*globals Twitapp */

Twitapp.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'savedSearchesList searchView tweetList'.w(),
    
    savedSearchesList: SC.ScrollView.design({
      layout: { top: 0, left: 0, bottom: 0, width: 245},
      hasHorizontalScroller: NO,
      contentView: SC.SourceListView.design({
        contentBinding: 'Twitapp.searchesController',
        selectionBinding: 'Twitapp.searchesController.selection',
        contentValueKey: 'searchTerm',
        contentUnreadCountKey: 'unreadTweetsCount'
      })
    }),
    
    searchView: SC.View.design({
      layout: { centerX: 0, centerY: -210, height: 140, width: 400},
      childViews: 'searchField searchButton'.w(),
      
      searchField: SC.TextFieldView.design({
        layout: { top: 2, left: 10, height: 18, width: 260 },
        hint: "Search for #sproutcore".loc(),
        valueBinding: 'Twitapp.searchesController.queryString'
      }),
      
      searchButton: SC.ButtonView.design({
        layout: { top: 0, left: 285, height: 24, width: 100},
        title: "Search".loc(),
        isDefault: YES,
        target: 'Twitapp.searchesController',
        action: 'search'
      })
    }),
    
    tweetList: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { centerX: 0, centerY: 0, width: 400, height: 500 },
      contentView: SC.ListView.design({
        contentBinding: 'Twitapp.tweetsController',
        selectionBinding: 'Twitapp.tweetsController.selection',
        exampleView: Twitapp.TweetView,
        rowHeight: 80,
        rowSpacing: 10
      })
    })
  })

});
