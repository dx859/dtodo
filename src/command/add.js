const taskstore = require('../libs/taskstore');

module.exports = function (...args) {
  taskstore.addTask({ title: args[0] });
};
