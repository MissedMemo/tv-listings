## T.V. Listings Schedule Demo

####a React/node SPA referencing several public TV listing APIs

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

####review & critique existing online listing schedules
- KQED
- TV Guide
- etc.

####survey available listing APIs
- KQED
- TV Guide
- etc.

####READ.me acts as 'ToDo' list & promotes concurrent documentation/development

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


