# [daily water tracker](https://dailywatertracker.herokuapp.com/)
## June 2, 2017
### David Eliason

Description:
  * low-level server using node
  * use of formidable to parse incoming form posted data
  * low-level eventListeners, routing, url parsing
  * mongoDb cloud-hosted persistence of field description values; img persistence is only for local instances of app

    The app uses dependency injection in numberous locations. A 'handle' object is creataed
    where desired pathnames are cojoined with requestHandlers - functions that will be invoked.
    This 'handle' key:value object is injected top-level into the main 'start' method,
    which is used to spin up the server. By injecting it within this level, we are able to access it
    in different locations in subsequent use.
    In a similar way, both the 'route' module, the mongoDB db connection, are injected , which then provides the machinery
    to use the handle object and connection using the pathname obtained from the url.
    Please note that for image-saving to be functional, those related functions will need to be uncommented in requestHandlers

To Use:
  * clone repo
  * cd into repo
  * CLI: $ npm install
  * CLI: $ node index.js
  * Browser: localhost:8080



Or, visit the live site: [daily water tracker](https://dailywatertracker.herokuapp.com/)