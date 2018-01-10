let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// 1 = Element
// 2 = Attribute (deprecated)
// 3 = text mode
// 8 = Comment
// 9 = Document Itself 
// 10 = Doctype


// get childern element nodes ---->
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hellooooo';

// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child element
val =list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get prev sibling
val = listItem.previousSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);

// CREATING ELEMENTS-------------------------->

// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add ID
li.id = 'new-item';

// add attribute 
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello worlddd'));

// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// create new link element
const link = document.createElement('a');
// add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// append link to li
li.appendChild(link);


console.log(li);
