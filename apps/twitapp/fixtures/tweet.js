// // ==========================================================================
// // Project:   Twitapp
// // Copyright: ©2009 (MRD)
// // Author: Josh Holt
// // ==========================================================================
// /*globals Twitapp */
// 
// sc_require('models/tweet');
// 
// Twitapp.Tweet.FIXTURES = [
// {
//   "profile_image_url": "http://s.twimg.com/a/1256597179/images/default_profile_5_normal.png",
//   "created_at": "Tue, 27 Oct 2009 18:56:04 +0000",
//   "from_user": "erichocean",
//   "to_user_id": 3071889,
//   "text": "@kyle_bolton The sample apps are great for seeing actual code examples, #sproutcore IRC on freenode is helpful, as is the Google Group.",
//   "id": 5207905117,
//   "from_user_id": 2319270,
//   "to_user": "kyle_bolton",
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a3.twimg.com/profile_images/375855015/Untitled_normal.jpg",
//   "created_at": "Sun, 25 Oct 2009 13:08:36 +0000",
//   "from_user": "nodtem66",
//   "to_user_id": null,
//   "text": "\u0e40\u0e17\u0e35\u0e22\u0e1a #Cappuccino \u0e01\u0e31\u0e1a #sproutcore \u0e41\u0e25\u0e49\u0e27\u0e0a\u0e2d\u0e1a #Cappuccino \u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32",
//   "id": 5146371449,
//   "from_user_id": 50323539,
//   "iso_language_code": "th",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a3.twimg.com/profile_images/375855015/Untitled_normal.jpg",
//   "created_at": "Sun, 25 Oct 2009 10:39:16 +0000",
//   "from_user": "nodtem66",
//   "to_user_id": null,
//   "text": "gem 1.3.1 \u0e25\u0e07 #sproutcore \u0e40\u0e19\u0e48\u0e32 \u0e1e\u0e2d update gem \u0e40\u0e1b\u0e47\u0e19 1.3.5 .........",
//   "id": 5144613961,
//   "from_user_id": 50323539,
//   "iso_language_code": "nl",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a3.twimg.com/profile_images/375855015/Untitled_normal.jpg",
//   "created_at": "Sun, 25 Oct 2009 10:36:43 +0000",
//   "from_user": "nodtem66",
//   "to_user_id": null,
//   "text": "\u0e15\u0e2d\u0e19\u0e19\u0e31\u0e49\u0e19\u0e27\u0e48\u0e32\u0e25\u0e07 #rails \u0e22\u0e32\u0e01 \u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e25\u0e07 #sproutcore \u0e22\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32",
//   "id": 5144589102,
//   "from_user_id": 50323539,
//   "iso_language_code": "th",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/364079526/Picture_2_normal.png",
//   "created_at": "Sat, 24 Oct 2009 09:00:55 +0000",
//   "from_user": "ariejdl",
//   "to_user_id": null,
//   "text": "RT @HTML5watcher wow, http://www.sproutcore.com/ #sproutcore looks great, hopefully play with it soon.",
//   "id": 5119364156,
//   "from_user_id": 47809342,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://s.twimg.com/a/1256597179/images/default_profile_5_normal.png",
//   "created_at": "Fri, 23 Oct 2009 17:11:43 +0000",
//   "from_user": "erichocean",
//   "to_user_id": null,
//   "text": "Enjoying family, life and coding. SproutHub is turning out so much better than I expected. Thank you @geoffreyd and @taavi223! #sproutcore",
//   "id": 5101662240,
//   "from_user_id": 2319270,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/56651742/Albert-Einstein_normal.jpg",
//   "created_at": "Wed, 21 Oct 2009 03:58:57 +0000",
//   "from_user": "cjk2121",
//   "to_user_id": null,
//   "text": "I'm thinking that we should use this on our #sproutcore Tasks application http://j.mp/18SyLK",
//   "id": 5036264620,
//   "from_user_id": 955976,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/201954358/hdr_wess_normal.png",
//   "created_at": "Wed, 21 Oct 2009 01:11:58 +0000",
//   "from_user": "wattzilla",
//   "to_user_id": null,
//   "text": "awww, need #sproutcore help and no one is around :(",
//   "id": 5032656216,
//   "from_user_id": 479984,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/201954358/hdr_wess_normal.png",
//   "created_at": "Mon, 19 Oct 2009 20:08:54 +0000",
//   "from_user": "wattzilla",
//   "to_user_id": null,
//   "text": "Working in #Sproutcore is looking to be more fun than expected.",
//   "id": 4999278534,
//   "from_user_id": 479984,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/329598330/turbulenz_normal.png",
//   "created_at": "Mon, 19 Oct 2009 14:21:00 +0000",
//   "from_user": "turbulenz",
//   "to_user_id": null,
//   "text": "Senior web app dev job advertised: http://is.gd/44IX4 Anyone interested? #jobs #games #html5 #sproutcore #cappuccino #django #rails",
//   "id": 4991880220,
//   "from_user_id": 37326958,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/201954358/hdr_wess_normal.png",
//   "created_at": "Sun, 18 Oct 2009 16:29:00 +0000",
//   "from_user": "wattzilla",
//   "to_user_id": null,
//   "text": "Developing some #Sproutcore",
//   "id": 4968818009,
//   "from_user_id": 479984,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a1.twimg.com/profile_images/259546658/George_normal.jpg",
//   "created_at": "Sat, 17 Oct 2009 22:34:02 +0000",
//   "from_user": "dremoor",
//   "to_user_id": null,
//   "text": "#sproutcore is the shiznat",
//   "id": 4952764832,
//   "from_user_id": 16742490,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://twitter.com/&quot;&gt;web&lt;/a&gt;"
// },
// {
//   "profile_image_url": "http://a3.twimg.com/profile_images/423517015/6571_921108249543_2259627_51073185_1699556_n_normal.jpg",
//   "created_at": "Sat, 17 Oct 2009 21:03:08 +0000",
//   "from_user": "JTaby",
//   "to_user_id": null,
//   "text": "#sproutcore: &quot;PHP is turing complete, and it works. but so does a shot of whiskey and a good pair of pliers when you have a tooth infection&quot;",
//   "id": 4951017339,
//   "from_user_id": 4874487,
//   "iso_language_code": "en",
//   "source": "&lt;a href=&quot;http://www.atebits.com/&quot; rel=&quot;nofollow&quot;&gt;Tweetie&lt;/a&gt;"
// }];
