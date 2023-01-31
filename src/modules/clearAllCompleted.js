import { retrieveData, storeData } from './localStorage.js';
import Todo from './todo.js';

const clearAllCompletedHandler = (e) => {
  e.preventDefault();
  let tasks = retrieveData();
  tasks.forEach((element) => {
    if (element.completed) {
      tasks = tasks.filter((todo) => todo.index.toString() !== element.index.toString());
    }
  });
  const reIndexedArray = [];
  tasks.sort((x, y) => x.index - y.index).forEach((element, index) => {
    reIndexedArray.push(new Todo(element.description, element.completed, index + 1));
  });
  storeData(reIndexedArray);
  window.location.reload();
};

export default clearAllCompletedHandler;