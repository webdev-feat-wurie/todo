const router = require("express").Router();
const Note = require("./schema");

router.get("/notes", async (req, res) => {
  try {
    const user = req.user;
    const notes = await Note.find({
      user_id: user.user_id
    });

    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/notes", async (req, res) => {
  const note = new Note({
    user_id: req.user.user_id,
    note: req.body.note
  });

  try {
    const newNote = await note.save();
    res.status(201).json({ newNote });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
