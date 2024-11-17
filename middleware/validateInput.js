const createError = require("http-errors");

const isValidStatus = (status) =>
  ["pending", "in_progress", "completed"].includes(status);
const validateTaskInput = (req, res, next) => {
  const { title, description, due_date, status } = req.body;

  if (!title || typeof title !== "string") {
    return next(createError(400, "Invalid title"));
  }

  if (!description || typeof description !== "string") {
    return next(createError(400, "Invalid description"));
  }

  if (!due_date || isNaN(Date.parse(due_date))) {
    return next(createError(400, "Invalid due date"));
  }

  if (status && !isValidStatus(status)) {
    return next(createError(400, "Invalid status"));
  }

  next();
};
module.exports = validateTaskInput;
