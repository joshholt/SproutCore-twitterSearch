// ==========================================================================
// Project:   Twitapp - mainPage
// Copyright: ©2009 My Company, Inc.
// @author: Josh Holt
// ==========================================================================
/*globals Twitapp */

Twitapp.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'searchView tweetList'.w(),
    
    searchView: SC.View.design({
      layout: { centerX: 0, centerY: -210, height: 140, width: 400},
      childViews: 'searchField searchButton'.w(),
      
      searchField: SC.TextFieldView.design({
        layout: { top: 2, left: 10, height: 18, width: 260 },
        hint: "Search for #sproutcore".loc(),
        valueBinding: 'Twitapp.searchController.queryString'
      }),
      
      searchButton: SC.ButtonView.design({
        layout: { top: 0, left: 285, height: 24, width: 100},
        title: "Search".loc(),
        target: 'Twitapp.searchController',
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
