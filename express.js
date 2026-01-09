import express from 'express';
const app=express();   //creating an express application
const port=3000;  //defining a port number
app.get('/',(req,res)=>{   //defining a route for GET request on root URL
    res.send('Welcome to Express.js Server!');   
});
app.get('/home',(req,res)=>{   
    res.send('<h3 style="color:blue;">Hello World from Express.js!</h3>');   
});
app.get('/contact',(req,res)=>{  
    res.json({message: 'Hello World from Express.js!'});   
});
app.get('/blog',(req,res)=>{  
    res.send('Hello World from Express.js!');   
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});































// express is used to create web applications and APIs using Node.js.

// why it is used when node.js can also create web applications?
// express provides a higher level of abstraction and a more convenient way to handle common web development tasks. it offers features like routing, middleware support, template engines, and more, which makes it easier and faster to build web applications compared to using Node.js alone.

// express is a minimal and flexible web application framework for Node.js that provides a robust set of features for web and mobile applications. it simplifies the process of building web applications by providing a higher level of abstraction over the core Node.js HTTP module.

// how frontend is communicating with backend?
// frontend communicates with backend using HTTP requests over the network. when a user interacts with the frontend (like clicking a button or submitting a form), the frontend sends an HTTP request (GET, POST, PUT, DELETE, etc.) to the backend server. the backend processes the request, performs necessary operations (like database queries, business logic), and sends back an HTTP response to the frontend. the frontend then updates the user interface based on the response received from the backend.
// localhost 3000 is default port for express.js applications. when we run an express.js application, it listens for incoming HTTP requests on port 3000 by default. we can change this port number if needed by specifying a different port in our application code.

// request response cycle in express.js:
// 1. client sends an HTTP request to the server.
// 2. express.js receives the request and processes it.
// 3. express.js routes the request to the appropriate handler based on the URL and HTTP method.
// 4. the handler performs necessary operations (like querying a database, processing data).
// 5. the handler sends back an HTTP response to the client.
// 6. the client receives the response and updates the user interface accordingly.

// status codes:
// 1xx: informational responses (e.g., 100 Continue)
// 2xx: successful responses (e.g., 200 OK, 201 Created)
// 3xx: redirection messages (e.g., 301 Moved Permanently, 302 Found)
// 4xx: client error responses (e.g., 400 Bad Request, 404 Not Found)
// 5xx: server error responses (e.g., 500 Internal Server Error, 503 Service Unavailable)
// why only json format is used in APIs?


// difference btwn API and REST API is that API (Application Programming Interface) is a general term that refers to a set of rules and protocols for building and interacting with software applications. it allows different software systems to communicate with each other. REST API (Representational State Transfer API) is a specific type of API that follows the principles of REST architecture. it uses standard HTTP methods (GET, POST, PUT, DELETE) and is stateless, meaning each request from the client to the server must contain all the information needed to understand and process the request.

// there are 65k-70k port numbers.js-3000, react-5000, mongodb-27017, mysql-3306, postgresql-5432 ,express-we can change default port number.