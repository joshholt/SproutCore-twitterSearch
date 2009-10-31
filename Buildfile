# ==========================================================================
# Project:   Twitapp
# Copyright: ©2009 (MRD)
# Author: Josh Holt
# ==========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy "/search.json", :to => "search.twitter.com"