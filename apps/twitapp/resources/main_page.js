// ==========================================================================
// Project:   Twitapp - mainPage
// Copyright: ©2009 My Company, Inc.
// @author: Josh Holt
// ==========================================================================
/*globals Twitapp */

Twitapp.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'savedSearchesList containerView'.w(),
    
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
    
    containerView: SC.View.design(SC.Border, {
      classNames: 'main-container'.w(),

      borderStyle: SC.BORDER_GRAY,
      backgroundColor: "#dedede",
      layout: { top: 40, left: 310, width: 430, height: 600 },
      childViews: 'searchView tweetList refreshButton'.w(),
      
      searchView: SC.View.design({
        layout: { top: 20, left: 20, height: 50, right: 20},
        childViews: 'searchField searchButton'.w(),

        searchField: SC.TextFieldView.design({
          layout: { top: 2, left: 10, height: 21, width: 260 },
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
        layout: { top: 60, left: 15, width: 400, bottom: 34 },
        contentView: SC.ListView.design({
          contentBinding: 'Twitapp.tweetsController',
          selectionBinding: 'Twitapp.tweetsController.selection',
          exampleView: Twitapp.TweetView,
          rowHeight: 90,
          rowSpacing: 10
        })
      }),
      
      refreshButton: SC.ButtonView.design({
        layout: { bottom: 5, right: 15, height: 24, width: 38 },
        // icon: 'twitapp-subdued-refresh-icon',
        icon: 'twitapp-glossy-refresh-icon',
        titleMinWidth:0,
        title: '',
        target: 'Orion.searchController',
        action: 'refresSearch'
      })
    })
  })

});
