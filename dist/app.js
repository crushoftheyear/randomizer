'use strict';

var addItemsForm = document.querySelector('.add-items');
var items = [];
var btnRandomize = document.querySelector('.randomize');

// create list & store input values in array
function addItem(e) {
  e.preventDefault();

  var itemsList = document.querySelector('.list');
  var inputVal = this.querySelector('input').value;
  var item = { text: inputVal };

  items.push(item);
  populateList(items, itemsList);
  this.reset();
}

// display list items
function populateList() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var itemsList = arguments[1];

  itemsList.innerHTML = items.map(function (item, i) {
    return '\n      <li>' + item.text + '</li>\n    ';
  }).join('');
}

// function to create new element
function addElement(type, text, className) {
  var newElement = document.createElement(type);
  var newElementContent = document.createTextNode(text);
  newElement.classList.add(className);
  newElement.appendChild(newElementContent);

  var currentElement = document.querySelector('.container');
  currentElement.appendChild(newElement);
}

// get random list item, remove randomize button & add refresh button
function randomItem() {
  if (items.length >= 1) {

    addElement('div', '', 'result');
    var displayRandom = document.querySelector('.result');
    var displayRandomText = displayRandom.querySelector('span');
    var _randomItem = items[Math.floor(Math.random() * items.length)].text;

    displayRandom.innerHTML = '<span>' + _randomItem + '</span>';
    this.remove();

    // reload page
    addElement('button', 'Go again!', 'refresh');
    var btnRefresh = document.querySelector('.refresh');
    btnRefresh.addEventListener('click', function () {
      return window.location.reload(true);
    });

    return false;
  }
}

addItemsForm.addEventListener('submit', addItem);
btnRandomize.addEventListener('click', randomItem);