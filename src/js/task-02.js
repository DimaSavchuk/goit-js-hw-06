const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = [...ingredients].map(element => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = element;
  return listElement;
});

const listWithIngradients = document.querySelector('#ingredients');
listWithIngradients.append(...list);
console.log(listWithIngradients);