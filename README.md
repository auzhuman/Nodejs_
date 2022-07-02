
# nodejs
This is a repo me learning nodejs 

npm 
npx 


npm init --makes a package.json
package.json has record of the js file.

for asynchronous task always use callback or promise.async await


-----nodemon
nodemon is a tool used in node to reload a program/server everytime any changes is made

-----npm start
update scripts to alias so npm runs that script

---------------------modules-----------------

//import modules

const constname = require("http") 

//export module as an object
module.exports ={
            functionalias : functionname
                }
                
                
-----------------authorization----------


body in request is used in put and post


--------------------------Express-----------------

Web-framework for node.It can be made MVC or as an API.Web application.As nodejs.  
const express = require('express')
const app = express();/Now we can use app to use express

app.get
app.listen
app.put

Separation of concern .for every type of http rew(GET,PUT,POST) we can have different type of handlers.Which cannot be done in node.

app.get(8080,function(req,res){ //in node request response cycle is completed but in express it is completed with data
    }
    
res.end takes only a single object as return
REQ.PARAM --let us know what comes in the request url.
? --  is passed as query from the url
REQ.QUERY --gets the query sent by the client





------------MIDDLEWARE------is a function--------access ---to req,response and next-------
-A developer has to accept request,parse,authenticate,process,and complete a request a incoming request.
-Work between when a request is made and response is made.

-It comes to action between req and response cycle.
syntax = function(req,res,next){}
          req - http req object 
          res -http response obj
          next -next middleware reference or pass of control
-APP.USE can be only used as a middleware and only consists of function.
-Order of middleware is very important.Regardless of http req a middleware gets executed.

+++++++++++++++++                         ++++++++++++++++++++++
For a single request made there is always only a single response. 
+++++++++++++++++                         ++++++++++++++++++++++

_________________________	types of middleware 	__________________________________



1.APPLICATION LEVEL MIDDLEWARE 
 -has direct scope of http req ,http response and next 	
  direct scope can hence add and delete different properties to http method like:
  
  // req.sagarmatha =    "college"   	--adds properties to the object
  //similarly delete req.sagaramtha  	--deletes the properties.
   and next() calls the next middleware in line.
   
  																			   middleware.app.use(function(req,respose,next){}),validation is used by this middleware
  																			   
  																			   

2.ROUTING MIDDLEWARE

	
	------------------------------ROUTING----------------------------------------
	How an API responds to the client requests. ---- for server side,bke
	What content is loaded for each url ---for client side -fte
	-get,put,post,delete
	next hands the control to next handler.
        1.express.router is used for routing
	  unlike using --app / --router is used 
	  -for eg.router.get,router.put -- router can be declared  with any variable
	  -const about = require("express").Router()
	  
	2.we can use route for different http methods like a nested promise handling.
	  for eg app.route('/home')
	         .get({})
	         .put({})
	  It is also called a miniapp.
        but in router we cannot use it to listen to the port.
        
        router.route('/:name')  //dynamic handler must be at last 
        about.route(/home)


3.Third party middleware

  ----------------------------------------MORGAN---------------------------------------
  Morgan - Http request logger middleware .It is used in apllication level middleware app.use.
  app.use(morgan("dev"))
  
4.Inbuilt Middleware
  --serve static content
	app.use(express.static("foldername"))
	app.use("/file",express.static("foldername'))
	--use this instead of the above inorder to have folder naming clear..
	
	app.use("file",express.static(path.join(processcwd(),"foldername")))
	
5.ERROR HANDLING MIDDLEWARE

   middleware with four args .and doesn,t get invokes automatically  in between req-res cycle.
   calling next with aargs invokes err handling middleware.
   //syntax
     app.use((err,req,res,next) => {}) --err is for error and other as application level middleware. 
     
     TODO sets the status code for the error so in client side we can get promise handling in catch insted of then.
     //res.status(400) --if not set then this error is in 200 which is green and represents success.



 

----------------------------------------MORGAN---------------------------------------
Morgan - Http request logger middleware .It is used in apllication level middleware app.use.
(mount incoming requests)
app.get(/notifi,(req,res,next) =>{} --exact http method,and exact http url
(specific endpoint handler)
app.use(/notifi,(req,res,next) =>{} --regardless of http method and exct http url

app.use(req,res,next) => {} --regardless of http method and url


--------------------------------GLOBALS------------------------------------------
=> __dirname gives the directory name.
=> process.cwd() --gives the root directory.

  

------------------MEMORY ALLOCATION IN EXPRESS-------------------
app.set('port',4554) //allocation of memory
app.get('port')


----------------------------VIEWS --IN -EXPRESS--------------------------------
Presentation layer ---first collects data and views data.
View is done in express as it is a webframework. But usually done in react,angular,and app is made using express.
View layer setup --
 without using static html we use templating engines.
 browser uses templating engines into html codes to render .
 many templating engines.for eg pug
 installation  ==> npm install pug,ejs
 ----------------PUG---------------
 1/Template engine setup/
    app.engine('pug', require('pug').__express)//this worked..
    app.set('view engine',require('pug')
    app.set('view',path.join(process.cwd(),'views'))
 2.Create a file with .pug extension
    same as html with indentation.
 3.To render the .pug into view
    app.render(index.pug,datalikejson)
    from the controller we can pass data to pug using assignment operator
      like idex.pug
      head
        title= title  //there should be no space while assigning.
      body 
        h1 welcome
        p= message

      app.render("index.pug",{
        tile : "KGF 2",
        message : "This is a blockbuster movie"
      })

  WHY TEMPLATING ENGINE??
   Since we can directly load a html file using static operation and we cannot make change from the middleware or backend.So inorder to make changes to the view from our cotroller we use templating engine.
 
 ---------------------------------------PARSER----------------------------very-imp-------
  Incoming data must be parsed by server.EVERY REQUEST HAS HTTP HEADERS AND HEADERS HAS A 
  CONTENT TYPE--content type holds what type of content is there.
  Server must have parser for each incomig request and its content type.So INBUILT MIDDLEWARE is used to parse the 
  content types.
  for eg.parser for x-www-form-urlencoded
    app.use(express.urlencoded({
          extended:"true"
          }))
   for json parser:
    app.use(express.json())
    
   thsese middleware adds body property in req obj
    and body property holds data from the client.  //use in post req.
    
    view to controller in middle parser is used
    
    
    
-----------------------------GETTING STARTED WITH EXPRESS    
    
--the things that have been done till now can be done in blink of seconds using express.

npm install -g express-generator@latest or version  

it can create app.js,views , controller .package.json all at  once  so an app can be built easily
    and run through npm start
    
      


