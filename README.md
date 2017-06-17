# [daily water tracker](https://dailywatertracker.herokuapp.com/)
## June 2, 2017
### David Eliason

Description:
  * low-level server using node
  * use of formidable to parse incoming form posted data
  * low-level eventListeners, routing, url parsing
  * mongoDb cloud-hosted persistence of field description values
  * **img persistence is only for local instances of app**

    The app uses dependency injection in numberous locations. A 'handle' object is creataed
    where desired pathnames are co-joined with requestHandlers - functions that will be invoked.

    This 'handle' key:value object is injected top-level into the main 'start' method, which is used to spin up the server.

    By injecting it within this level, we are able to access it
    in different locations in subsequent use.

    In a similar way, both the 'route' module, the mongoDB db connection, are injected , which then provides the machinery to use the handle object and connection using the pathname obtained from the url.

Yes, express would sure be a lot easier but learned a lot this way :)

To Use:

First:
````
$ git clone https://github.com/davideliason/dailyWaterTracker
````
Second:
````
$ cd dailyWaterTracker
````
Third, install dependencies
````
$ npm install
````
Next:
````
$ node index.js
````
Lastly, open up your browser
````
http://www.localhost:8080
````
or, simply go [here](https://dailywatertracker.herokuapp.com/)



Or, visit the live site: [daily water tracker](https://dailywatertracker.herokuapp.com/)