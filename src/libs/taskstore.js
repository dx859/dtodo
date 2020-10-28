const fs = require('fs');
const path = require('path');

const taskPath = path.resolve(__dirname, '..', '..', 'task.json');

function getTask() {
  if (fs.existsSync(taskPath)) {
    return JSON.parse(fs.readFileSync(taskPath, { encoding: 'utf8' }));
  }
  return [];
}

function saveTask(tasks) {
  fs.writeFileSync(taskPath, JSON.stringify(tasks));
}

function addTask({ title = '' } = {}) {
  const tasks = getTask();

  tasks.push({
    id: String(tasks.length + 1),
    title,
    complete: false,
    addTime: Date.now(),
  });

  saveTask(tasks);
}

function deleteTask(id) {
  let tasks = getTask();
  return tasks.filter((task) => task.id === id);
}

function updateTask(opts = {}) {
  const id = opts.id;
  let tasks = getTask();
  let task = tasks.filter((task) => task.id === id)[0];
  if (!task) {
    throw new Error(`没找到id为${id}得项目`);
  }
  delete opts.id;
  Object.assign(task, opts);
  saveTask(tasks);

  return task;
}

module.exports = {
  getTask,
  saveTask,
  addTask,
  deleteTask,
  updateTask,
};
