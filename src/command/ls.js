const color = require('colors');
const taskstore = require('../libs/taskstore');

module.exports = function () {
  let tasks = taskstore.getTask();

  tasks.forEach((task) => {
    console.log(
      `${leftPad(task.id, String(tasks.length))}${task.id}. ${
        task.complete ? color.green('✓') : color.red('✖')
      }  ${task.title}`
    );
  });
};
function leftPad(s1, s2) {
  return ' '.repeat(s2.length - s1.length);
}
