module.exports = app => {
    const tutorial2 = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorial2.create);
  
    // Retrieve all tutorial2
    router.get("/", tutorial2.findAll);
  
    // Retrieve all published tutorial2
    router.get("/published", tutorial2.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorial2.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorial2.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorial2.delete);
  
    // Delete all tutorial2
    router.delete("/", tutorial2.deleteAll);
  
    app.use('/api/tutorial2', router);
  };