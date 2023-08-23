const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Analysiss" });
});
// set port, listen for requests
// require("./app/routes/tutorial.routes")(app);
// require("./app/routes/customer.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// GET, POST, DELETE, PUT
// app.get('/tuts', (req,res)=>{
//   res.send('list of all tuts')
// })


// app.post('/api/add', (req,res)=>{
//   console.log(req.body)
//   res.send('add tutorial')
// })


// app.post('/api/cust',(req,res)=>{
//   console.log(req.body)
//   res.send('customer id:', res.cid)
// })
const element={}
const db = require('./connect')
//const {parse, stringify} = require('flatted');


  app.get("/a", (req, res) => {
    db.query("SELECT cid FROM customers WHERE age>25", function (err, result) {
      if (err) throw err;
      console.log((result));
      res.send(result)
    });
    // res.send(a);
  });

  app.get("/#orders", (req, res) => {
    db.query("SELECT count(oid) , Datename(weekday,updatedAt) as Day FROM orders GROUP BY Day;", function (err, result) {
      if (err) throw err;
      console.log((result));
      res.send(result)
    });
    // res.send(a);
  });

  app.get("/profit", (req, res) => {
    db.query("SELECT sum(total) , Datename(weekday,updatedAt) as Day FROM orders GROUP BY Day;", function (err, result) {
      if (err) throw err;
      console.log((result));
      res.send(result)
    });
    // res.send(a);
  });

  app.get("/bestseller", (req, res) => {
    db.query("SELECT item, sum(qty) FROM orders GROUP BY item;", function (err, result) {
      if (err) throw err;
      console.log((result));
      res.send(result)
    });
    // res.send(a);
  });
