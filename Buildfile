# ===========================================================================
# Project:   Twitapp
# Copyright: ©2009 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy "/search.json", :to => "search.twitter.com"