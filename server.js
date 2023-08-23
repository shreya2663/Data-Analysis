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
// simple route
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Restooooooooo" });
});
// set port, listen for requests
require("./app/routes/tutorial.routes")(app);
require("./app/routes/customer.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// GET, POST, DELETE, PUT
app.get('/tuts', (req,res)=>{
  res.send('list of all tuts')
})


app.post('/api/add', (req,res)=>{
  console.log(req.body)
  res.send('add tutorial')
})


app.post('/api/cust',(req,res)=>{
  console.log(req.body)
  res.send('customer id:', res.cid)
})

