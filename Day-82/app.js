// Selecting element by ID
const elementById = document.getElementById('exampleDiv');
console.log('Element selected by ID:', elementById);

// Selecting element by class name
const elementsByClassName = document.getElementsByClassName('highlight');
console.log('Elements selected by class name:', elementsByClassName);

// Selecting element by tag name
const elementsByTagName = document.getElementsByTagName('p');
console.log('Elements selected by tag name:', elementsByTagName);

// Query Selector
const elementByQuerySelector = document.querySelector('#exampleDiv');
console.log('Element selected by querySelector:', elementByQuerySelector);

const elementsByQuerySelectorAll = document.querySelectorAll('.highlight');
console.log('Elements selected by querySelectorAll:', elementsByQuerySelectorAll);