// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
// import _ from 'lodash';
import './style.css';

const inputTaskFormField = document.getElementById('inputTaskFormField');

const taskTodoHolder = document.getElementById('taskTodoHolder');

const moreVert = document.querySelectorAll('.more_vert');

const deleteUserTaskFromList = moreVert;

// const uiData = [
//   {
//     description: 'Buy Groceries',
//     completed: false,
//     index: 1,
//   },

//   {
//     description: 'Go to the Library',
//     completed: true,
//     index: 2,
//   },

//   {
//     description: 'Attend a Church Service',
//     completed: true,
//     index: 3,
//   },

// ];

let taskArray = [];

const addUserTaskList = () => {
  const taskEmptyObject = {};
  taskEmptyObject.description = inputTaskFormField.value;
  taskEmptyObject.completed = false;
  taskEmptyObject.index = taskArray.length + 1;
  taskArray.push(taskEmptyObject);
};

const saveUserTaskToLocalStorage = () => {
  localStorage.setItem('taskArray', JSON.stringify(taskArray));
};

// const renderUIData = uiData.forEach((item) => {
//   const { description, status, index } = item;

//   const dataPlaceHolder = `
//   <li class="each-todo-item" id=${index} item=${status}>
//       <input type="checkbox" name="todo-item" id="todo-item">
//       <label for="todo-item" class="todo-description">${description}</label>
//       <button type="submit" class="more_vert">
//       <i class="material-icons">more_vert</i>
//       </button>
//     </li>
//   `;

//   document.querySelector('.todo-container').innerHTML += dataPlaceHolder;
// });

const sendUserTaskToLocalStorage = () => {
  taskTodoHolder.innerHTML = '';
  taskArray.forEach((item) => {
    const { description, status, index } = item;

    const dataPlaceHolder = `
    <li class="each-todo-item" id=${index} item=${status}>
        <input type="checkbox" name="todo-item" id="todo-item" data-id=${index} class="input-from-user">
        <label for="todo-item" class="todo-description">${description}</label>
        <button type="submit" class="more_vert">
        <i class="material-icons">more_vert</i>
        </button>
      </li>
    `;

    taskTodoHolder.innerHTML += dataPlaceHolder;
    // document.querySelector('.todo-container').innerHTML += dataPlaceHolder;
    inputTaskFormField.value = '';
  });

  deleteUserTaskFromList.forEach((element) => {
    element.addEventListener('click', () => {
      const elementIndex = taskArray.findIndex((taskz) => taskz.index === element.dataset.id);
      const alreadyRemovedUserTask = (uniqueId) => {
        taskArray.splice(uniqueId, 1);
        for (let index = 0; index < taskArray.length; index += 1) {
          taskArray[index] = index + 1;
        }
        saveUserTaskToLocalStorage();
        localStorage.setItem('taskArray', JSON.stringify(taskArray));
      };
      alreadyRemovedUserTask(elementIndex);
    });
  });

  const userTaskDetails = document.querySelectorAll('input-from-user');
  userTaskDetails.forEach((inputDesc) => {
    inputDesc.addEventListener('focusout', () => {
      const inputDescId = taskArray.findIndex((taskz) => taskz.index === inputDesc.dataset.id);
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