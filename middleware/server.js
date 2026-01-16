import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true })); // inbuilt middleware to parse urlencoded data i.e., form data connecting frontend to backend
app.use(express.json()); 
app.get('/',  (req, res) => {
    res.send(`<h2>Welcome to Todo App</h2>
        <form method="POST" action="/submit">
        <input type="text" name="name" placeholder="Enter name" />
        <input type="number" name="age" placeholder="Enter age" />
        <button type="submit">Submit</button>
        </form>`);
    });

    app.post('/submit', (req, res) => {
        console.log(req.body);
        res.send(`form received:${JSON.stringify(req.body)}`);
    });

app.listen(4000,()=>{
  console.log('Server is running on port 4000. Visit http://localhost:4000 to view the app.');
});


// ui