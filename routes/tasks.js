const express = require("express");
const validateTaskInput = require("../middleware/validateInput");
const tasks = require("../db");
const createError = require("http-errors");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const generateId = () => uuidv4();

//get all tasks
router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

//retrieve a task with specific id
router.get("/tasks/:id", (req, res, next) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return next(createError(404, "Task not found"));
  }
  res.status(200).json(task);
});

//create a new task
router.post("/tasks", validateTaskInput, (req, res) => {
  const { title, description, due_date } = req.body;

  const newTask = {
    id: generateId(),
    title: title,
    description: description,
    due_date: due_date,
    status: "pending",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

//update a existing task
router.put("/tasks/:id", validateTaskInput, (req, res, next) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return next(createError(404, "Task not found"));
  }

  const { title, description, due_date, status } = req.body;

  task.title = title || task.title;
  task.description = description || task.description;
  task.due_date = due_date || task.due_date;
  task.status = status || task.status;
  task.updated_at = new Date().toISOString();

  res.status(200).json(task);
});

//delete a existing task
router.delete("/tasks/:id", (req, res, next) => {
  const index = tasks.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return next(createError(404, "Task not found"));
  }

  tasks.splice(index, 1);
  res.status(204).json("deleted successfully");
});

//mark a task as complete
router.patch("/tasks/:id/complete", (req, res, next) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) {
    return next(createError(404, "Task not found"));
  }

  task.status = "completed";
  task.updated_at = new Date().toISOString();

  res.status(200).json(task);
});

module.exports = router;
