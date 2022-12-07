/* eslint-disable no-unused-vars */
import _ from 'lodash';
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
    index: 4,
  },
];

const renderUIData = uiData.forEach((item) => {
  const { description, completed, index } = item;

  const dataPlaceHolder = `
    <li class="todo-item" id=${index} item=${completed} >
      <div class="box-list-more">
        <input type="checkbox" name="todo" class="todo-checkbox" id="todoCheckbox">
        <p class="todo-description">${description}</p>
        <button class="more_vert">
        <span class="material-icons">
        more_vert
        </span>
      </button>
      
    </div>
    
  </li>
  <hr class="divider" />
  `;
  document.querySelector('.todo-list').innerHTML += dataPlaceHolder;
});

window.onload = renderUIData;