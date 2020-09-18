let storedNotes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(storedNotes);
  });

  app.post("/api/notes", function(req, res) {
    storedNotes.push(req.body);
    res.json(storedNotes);
  });
  
  app.delete("/api/notes/:id", function(req, res) {
    const noteId = req.params.id;

    //Function to filter notes
    const filterById = (note) => {
      if(note.id !== noteId) {
        return true
      }
      return false;
    }

    //Invoke the filterById function to filter notes in the storedNotes array
    storedNotes = storedNotes.filter(filterById);

    res.json(storedNotes);
  });   
}