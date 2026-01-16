import express from 'express';
import rateLimit from 'express-rate-limit';
const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message:{status: 429,
    error:'Too many requests from this IP, please try again after 1 minute'
}   
});
 app.use(limiter); // applying rate limiting middleware globally

 app.get('/',  (req, res) => {
    res.send('home page');
});

app.get('/user',  (req, res) => {
    res.json([{ id: 1, name: 'veda' }, { id: 2, name: 'varshini' }]);
});
app.listen(4000,()=>{
  console.log('Server is running on port 4000');
});








// npm install express-rate-limit is used to limit repeated requests to public APIs and/or endpoints such as password reset.
// It helps to protect against brute-force attacks and denial-of-service attacks by limiting the number of requests a client can make in a given time period.
// It is a third party middleware.