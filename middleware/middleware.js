// middleware is a function that has access to the request and response objects
// it can modify the request and response objects
// it can end the request response cycle
// it can call the next middleware in the stack.it is used to perform some operations before the request is handled by the route handler
// why middle ware in express is 

// 3 types of middleware
// 1. inbuilt middleware
// 2. third party middleware
// 3. custom middleware

import express from 'express';
const app = express();
app.use(express.json()); // inbuilt middleware to parse json data

const checkData= (req, res, next) => {
  const { title, description } = req.body;
  if(req.body.name || req.body.age){   //&& cant be used because either name or age can be present
    next(); // call the next middleware or route handler
    // if next is not called the request will be left hanging
  } else {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// middleware is not used in get request because get request does not have a body
const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

app.use(logRequest); // applying middleware globally

app.get('/todos',  (req, res) => {
  res.json({ message: 'Get all todos' });
});

app.post('/todos', checkData, (req, res) => {
  res.json({ message: 'Todo created', data: req.body });
});

app.listen(4000,()=>{
  console.log('Server is running on port 4000');
});


// express.json() is an inbuilt middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. It is used to parse the body of the request and make it available in req.body.
// express.urlencoded() is an inbuilt middleware function in Express. It parses incoming requests with URL-encoded payloads and is based on body-parser. It is used to parse the body of the request and make it available in req.body. It is typically used for form submissions.
// express.static is an inbuilt middleware function in Express. It serves static files such as images, CSS files, and JavaScript files. It is used to serve static assets from a directory.