/* eslint-disable no-unused-vars */
// import _ from 'lodash';
import './style.css';

const uiData = [
  {
    description: 'Buy Groceries',
    completed: false,
    index: 1,
  },

  {
    description: 'Go to the Library',
    completed: true,
    index: 2,
  },

  {
    description: 'Attend a Church Service',
    completed: true,
    index: 3,
  },

  {
    description: 'Watch a Movie',
    completed: true,
    index: 4,
  },
  
  {
    description: 'Mow the Lawn',
    completed: true,
    index: 5,
  },

];

const renderUIData = uiData.forEach((item) => {
  const { description, completed, index } = item;

  const dataPlaceHolder = `
  <li class="each-todo-item" id=${index} item=${completed}>
      <input type="checkbox" name="todo-item" id="todo-item">
      <label for="todo-item" class="todo-description">${description}</label>
      <button type="submit" class="more_vert">
      <i class="material-icons">more_vert</i>
      </button>
    </li>
  `;

  document.querySelector('.todo-container').innerHTML += dataPlaceHolder;
});

window.onload = renderUIData;