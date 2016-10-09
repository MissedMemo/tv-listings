## T.V. Listings Schedule Coding Challenge

####Create a TV listings schedule SPA, pulling data from any public API

###hosted at: &nbsp; [tv-listings.herokuapp.com](http://tv-listings.herokuapp.com)

###Tech. Stack:
* Javascript/ES6 (babel)
* ReactJS
* react router v.4 (alpha)
* webpack
* CSS Modules, PostCSS
* Mocha/Chai/Enzyme (unit testing)
* Axios (remote comms)
* node/Express server
* hosted on Heroku
* data sources: [tvmaze.com](http://www.tvmaze.com/api)

##Implementation Log (strategy and outcomes):

###1) Initial Research:

####Review existing online listing services feature sets and UIX
* [KQED](http://www.kqed.org/tv/schedules/daily/): Aesthetically bland; a somewhat "busy" UI with many onscreen elements, and some nav features appended as sidebar elements rather than integrated into the UI. Looks better when you select 'Hide Details' -- a better default? Program codes exposed -- what use?
* [TV Guide](http://www.tvguide.com/listings/): Still fairly bland. Supports the ability to define a personal watch list
* [Titan TV](http://titantv.com/): Painful color scheme
* [zap2it](http://tvschedule.zap2it.com/tvlistings/ZCGrid.do): Bland. Excess white space and tiny font gives a (false) impression of limited listings
* [tv.com](http://www.tv.com/listings/): Listing content noticably easier to parse visually (stronger font, clear dilineation between program times...)
* [HuffPost TV](http://tvlistings.aol.com/listings/ca/berkeley/dish-san-francisco/DISH807): Excessive use of bold text and color badges makes all elements appear to be high priority. Half of the page taken up by an empty header, with an annoying auto-loaded audio file.
* [DirectTV](https://www.directv.com/guide): Visually more polished, with appropriate font size. Current time bar feature suggests interaction, but seems to serve no real purpose, especially since the site fails to auto-detect visitor's time zone. Header is a bit busy (a lot to parse, visually).
* [E online](http://www.eonline.com/shows/schedule): Clear, calm and simple, but no features other than basic date/time text listing (no ability to click to see program details, for example)
* [Dish Network](https://www.mydish.com/guide): Surprisingly bland for a commerical service. Awkward forward/back arrow button UI
* [createtv.com](http://createtv.com/schedule): Clean, simple, slightly more polished UI. Only site to associate inviting IMAGES with each program listing. 
* [tvmaze.com](http://www.tvmaze.com/schedule): Simple, clean. Not polished in the sense of shiny clickable elements, but reflecting good basic UI design (appropriate font size, vertically-centered text, color & contrast...)


####Evaluate available listing APIs
* [NPR](http://www.npr.org/api/inputReference.php) (link included in challenge instructions):
* [Public Media Platform](http://publicmediaplatform.org/about/content/) (included in challenge instructions):
* [PBS (COVE API)](https://projects.pbs.org/confluence/display/coveapi/COVE+API+Version+1) (included in challenge instructions): Requires sending email to request an access code, with response promised 'in 48 hours'. Associated [node module from KQED](https://github.com/KQED/cove-api) promises to simplify query code. UPDATE: No new access to COVE being granted, while it undergoes a rewrite
* [tvmedia API](https://developer.tvmedia.ca/):
* [tvmaze API](http://www.tvmaze.com/api): Extremely simple, with no setup required, but limited feature set for the free version, and unknown ongoing support now that a paid version has been released.


###2) Create "walking skeleton" SPA shell:
  &nbsp;&nbsp;&#10004;&nbsp;
  create readme to promote concurrent documentation during development
  <br>&nbsp;&nbsp;&#10004;&nbsp;
  create a generic React client & node server, hosted on Heroku
  <br>&nbsp;&nbsp;&#10004;&nbsp;
  add basic test support (maintain TDD discipline as much as is practical)
  <br>&nbsp;&nbsp;&#10004;&nbsp;
  implement UI shell, with basic page nav. & place-holder divs
  <br>&nbsp;&nbsp;&#10004;&nbsp;
  issue ajax requests to retrieve listing data using simplest available API
  

###3) Outline expected feature set, UIX, and tech. stack
(expect to implement a limited subset in the time available)


###4A) Evolve the UI, emphasizing extensibility, relying on newer tech.

* apply basic date-time filters, to display listings by day & time
* attempt responsive design using plain Flexbox (vs. my usual Bootstrap grid approach)
* enable/disable controls & routes, based on login status
* implement 'Profile' etc. supplemental pages

###4B) Conduct offline "spikes", to explore specific tech. issues

* [React widgets](http://jquense.github.io/react-widgets/docs/#/?_k=m7hgby) (date-time picker etc. with cross/legacy browser support)
* devise a paging/caching strategy -- including possible infinite scroll
* user login/authorization
* server-side rendering

####Notes:

> Simplest option to hosting a React app. on Heroku with webpack is just to include bundle.js (minified, using webpack -p) with files pushed to github. To avoid checking compiled resources into source control, we use a post-build step (defined in package.json) to re-generate JS and CSS bundles on Heroku. This requires babel, webpack, and supporting modules to be defined as regular dependencies instead of dev-dependencies -- babel is also required in order to run our ES6 node server code.

> We use CSS Modules and PostCSS, which are increasingly popular cutting edge techniques to help manage, and maximize the effectiveness of styles. Additionally, we extract hashed ids to a separate file, use a combination of 'ignore-styles' and 'classnames' modules to enable tests to continue to work with hashed class names, and rely on autoprefix to support modern features like flexbox in older browsers.

> We first work out UI element placement and sizing using div blocks and lorem-ipsum placeholder text in separate html/css files before re-implementing as React components in our project. We chose the ['Asparin-C' color scheme](https://color.adobe.com/explore/most-popular/?time=all) from Adobe's online resource.

> We skip using Redux until and unless it becomes necessary -- a hot topic in recent industry discussions -- and also because Redux support is still lacking under react-router 4's new, vastly-improved approach to routing.
