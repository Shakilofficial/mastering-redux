const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("Delaying action...");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
};
