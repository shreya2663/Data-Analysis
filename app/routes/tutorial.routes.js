module.exports = app => {
    const orders = require("../controllers/tutorial.controller.js");
    const customers = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", orders.create);
    app.use('/api/add', router);
    // router.post("/", orders.createCust);
    // app.use('/api/cust', router);
    // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
    
    
  };