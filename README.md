# daily water tracker
## June 2, 2017
### David Eliason

Description:
  * low-level server using node
  * use of formidable to parse incoming form posted data
  * low-level eventListeners, routing, url parsing
  * Not very flashy, this is more for low-level understanding for working with node modules, routing, fs access

    The app uses dependency injection in numberous locations. A 'handle' object is creataed
    where desired pathnames are cojoined with requestHandlers - functions that will be invoked.
    This 'handle' key:value object is injected top-level into the main 'start' method,
    which is used to spin up the server. By injecting it within this level, we are able to access it
    in different locations in subsequent use.
    In a similar way, the 'route' module is injected within 'start', which then provides the machinery
    to use the handle object using the pathname obtained from the url.

To Use:
  * clone repo
  * cd into repo
  * CLI: $ npm install
  * CLI: $ node index.js
  * Browser: localhost:8080