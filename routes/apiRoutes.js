const storedNotes = require("../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(storedNotes);
  });

  app.post("/api/notes", function(req, res) {
    storedNotes.push(req.body);
    res.json(storedNotes);
  });
  
  // app.delete("/api/notes/:id", function(req, res) {
  //   const noteId = req.params.id;

  // })
    
}