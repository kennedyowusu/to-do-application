import addNewItem from './__mocks__/variable';

jest.mock('./variable');

// export default addNewItem;

// remove items from list 3 times
// const removeItem = () => {
//   const removeItems = document.createElement('INPUT');
//   removeItems.setAttribute('type', 'button');
//   removeItems.setAttribute('id', 'removeItems');
//   removeItems.setAttribute('value', 'remove Item');
//   return removeItems.value;
// };

// add items to list 3 times
// const addNewItem1 = () => {
//   const addNewItems = document.createElement('INPUT');
//   addNewItems.setAttribute('type', 'text');
//   addNewItems.setAttribute('id', 'addNewItems');
//   addNewItems.setAttribute('value', 'add New Item');
//   return addNewItems.value;
// };

describe('testing add and remove functions', () => {
  test('addNewItem function', () => {
    expect(addNewItem()).toBe('add New Item');
  });
});