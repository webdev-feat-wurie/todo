const router = require("express").Router();
const Todo = require("./schema");

router.get("/todos", async (req, res) => {
  try {
    const user = req.user;
    const todos = await Todo.find({
      userID: user.user_id
    });

    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/todos", async (req, res) => {
  const todo = new Todo({
    userID: req.user.user_id,
    description: req.body.description,
    reminderDate: new Date(req.body.reminder_date)
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json({ newTodo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
