## T.V. Listings Schedule Coding Challenge

####Create a TV listings schedule SPA, pulling data from any public API

[(someLink).herokuapp.com](http://example.com)

###Tech. Stack:
- Javascript ES6
- ReactJS & Redux
- react router
- webpack
- Less (CSS preprocessor)
- Mocha/Chai/Enzyme (unit testing)
- Axios & redux-thunk (remote comms)
- node.js server
- hosted on Heroku
- data sources:
  - T.V.: [tvmaze.com](http://www.tvmaze.com/api)
  - PBS: [COVE API](https://projects.pbs.org/confluence/display/coveapi) using KQED's [node module](https://github.com/KQED/cove-api)

<br>

##Implementation Log (strategy and outcomes):

###1) Initial Research:

####quick impressions of existing online listing features sets and UIX
- [KQED](http://www.kqed.org/tv/schedules/daily/): Aesthetically bland; a somewhat "busy" UI with many onscreen elements, and some nav features appended as sidebar elements rather than integrated into the UI. Looks better when you select 'Hide Details' -- a better default? Program codes exposed -- what use?
- [TV Guide](http://www.tvguide.com/listings/): Still fairly bland. Supports the ability to define a personal watch list
- [Titan TV](http://titantv.com/): Painful color scheme
- [zap2it](http://tvschedule.zap2it.com/tvlistings/ZCGrid.do): Bland. Excess white space and tiny font gives a (false) impression of limited listings
- [tv.com](http://www.tv.com/listings/): Listing content noticably easier to parse visually (stronger font, clear dilineation between program times...)
- [HuffPost TV](http://tvlistings.aol.com/listings/ca/berkeley/dish-san-francisco/DISH807): Excessive use of bold text and color badges makes all elements appear to be high priority. Half of the page taken up by an empty header, with an annoying auto-loaded audio file.
- [DirectTV](https://www.directv.com/guide): Visually more polished, with appropriate font size. Current time bar feature suggests interaction, but seems to serve no real purpose, especially since the site fails to auto-detect visitor's time zone. Header is a bit busy (a lot to parse, visually).
- [E online](http://www.eonline.com/shows/schedule): Clear, calm and simple, but no features other than basic date/time text listing (no ability to click to see program details, for example)
- [Dish Network](https://www.mydish.com/guide): Surprisingly bland for a commerical service. Awkward forward/back arrow button UI
- [createtv.com](http://createtv.com/schedule): Clean, simple, slightly more polished UI. Only site to associate inviting IMAGES with each program listing. 
- [tvmaze.com](http://www.tvmaze.com/schedule): Simple, clean. Not polished in the sense of shiny clickable elements, but reflecting good basic UI design (appropriate font size, vertically-centered text, color & contrast...)


####evaluate available listing APIs
- [NPR](http://www.npr.org/api/inputReference.php) (link provided with challenge instructions):
- [Public Media Platform](http://publicmediaplatform.org/about/content/) (linked in challenge doc):
- [PBS (COVE API)](https://projects.pbs.org/confluence/display/coveapi/COVE+API+Version+1) (linked in challenge doc): Requires sending email to request an access code, with response promised 'in 48 hours'. [node module from KQED](https://github.com/KQED/cove-api) simplifies query code.
- [tvmedia API](https://developer.tvmedia.ca/):
- [tvmaze API](http://www.tvmaze.com/api): Extremely simple, with no setup required, but limited feature set for the free version, and unknown ongoing support once the paid version comes online (next week).

####edit readme as a 'ToDo' list, and to promote concurrent documentation/development

###2) Create "walking skeleton" SPA shell:
- basic React client, with node server, hosted on Heroku
- ajax requests to retrieve listing data using simplest public API
- maintain TDD discipline as much as is practical

###3) Sketch out desired feature set, UIX, and tech. stack
(expect to implement some limited subset in time available)

###4) Conduct offline "spikes", to explore specific tech. issues
- user login/authorization
- server-side rendering

###5) Evolve the UI, emphasizing extensibility, relying on newer tech.
- flexbox with auto-prefix etc.


