
const addItemsForm = document.querySelector('.add-items');
const items = [];
const btnRandomize = document.querySelector('.randomize');


// create list & store input values in array
function addItem(e) {
  e.preventDefault();

  const itemsList = document.querySelector('.list');
  const inputVal = this.querySelector('input').value;
  const item = {text: inputVal,};

  items.push(item);
  populateList(items, itemsList);
  this.reset();
}


// display list items
function populateList(items = [], itemsList) {
  itemsList.innerHTML = items.map((item, i) => {
    return `
      <li>${item.text}</li>
    `;
  }).join('');
}


// function to create new element
function addElement (type, text, className) {
  const newElement = document.createElement(type);
  const newElementContent = document.createTextNode(text);
  newElement.classList.add(className);
  newElement.appendChild(newElementContent);

  const currentElement = document.querySelector('.container');
  currentElement.appendChild(newElement);
}


// get random list item, remove randomize button & add refresh button
function randomItem() {
  if (items.length >= 1) {

    addElement('div', '', 'result');
    const displayRandom = document.querySelector('.result');
    const displayRandomText = displayRandom.querySelector('span');
    const randomItem = items[Math.floor(Math.random() * items.length)].text;

    displayRandom.innerHTML = `<span>${randomItem}</span>`;
    this.remove();

    // reload page
    addElement('button', 'Go again!', 'refresh');
    const btnRefresh = document.querySelector('.refresh');
    btnRefresh.addEventListener('click', () => window.location.reload(true));

    return false;
  }
}


addItemsForm.addEventListener('submit', addItem);
btnRandomize.addEventListener('click', randomItem);
