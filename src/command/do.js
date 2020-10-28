const taskstore = require('../libs/taskstore');

module.exports = function (...args) {
  let id = args[0];
  taskstore.updateTask({ id, complete: true });
};
