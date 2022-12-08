/* eslint-disable max-len */
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
// import _ from 'lodash';
import './style.css';

const inputTaskFormField = document.getElementById('inputTaskFormField');

const taskTodoHolder = document.getElementById('taskTodoHolder');

let taskArray = [];

const addUserTaskList = () => {
  const taskEmptyObject = {};
  taskEmptyObject.index = taskArray.length + 1;
  taskEmptyObject.description = inputTaskFormField.value;
  taskEmptyObject.completed = false;

  taskArray.push(taskEmptyObject);
};

const saveUserTaskToLocalStorage = () => {
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
};

const sendUserTaskToLocalStorage = () => {
  taskTodoHolder.innerHTML = '';
  taskArray.forEach((item) => {
    const { description, index } = item;

    const dataPlaceHolder = `
    <li class="each-todo-item">
        <input type="checkbox">
        <label for="todo-item" id="todoDescription" class="input-from-user">${description}</label>
        <button type="submit" class="more_vert" data-id="${index}">
        <i class="material-icons">more_vert</i>
        </button>
      </li>
    `;

    taskTodoHolder.innerHTML += dataPlaceHolder;
    // document.querySelector('.todo-container').innerHTML += dataPlaceHolder;
    inputTaskFormField.value = '';
  });

  const moreVert = document.querySelectorAll('.more_vert');

  const deleteUserTaskFromList = moreVert;

  deleteUserTaskFromList.forEach((element) => {
    element.addEventListener('click', () => {
      const elementIndex = taskArray.findIndex((isTask) => isTask.index === parseInt(element.dataset.id, 10));
      const alreadyRemovedUserTask = (uniqueId) => {
        taskArray.splice(uniqueId, 1);
        for (let i = 0; i < taskArray.length; i += 1) {
          taskArray[i].index = i + 1;
        }
        saveUserTaskToLocalStorage();
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
      };
      alreadyRemovedUserTask(elementIndex);
    });
  });

  const userTask = document.querySelectorAll('input-from-user');
  const userTaskDetails = userTask;

  userTaskDetails.forEach((inputDesc) => {
    inputDesc.addEventListener('focusout', () => {
      const inputDescId = taskArray.findIndex((isDesc) => isDesc.index === parseInt(inputDesc.dataset.id, 10));
      taskArray[inputDescId].description = inputDesc.value;
      const updateUserExistingTask = () => {
        sendUserTaskToLocalStorage();
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
      };
      updateUserExistingTask();
    });
  });
};

const retrieveUserSavedTaskFromLocalStorage = () => {
  if (localStorage.getItem('taskArray') !== null) {
    const retrievedTask = JSON.parse(localStorage.getItem('taskArray'));

    taskArray = retrievedTask;
  }
  sendUserTaskToLocalStorage();
};

window.addEventListener('load', () => {
  retrieveUserSavedTaskFromLocalStorage();
});

inputTaskFormField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addUserTaskList();
    sendUserTaskToLocalStorage();
    saveUserTaskToLocalStorage();
  }
});