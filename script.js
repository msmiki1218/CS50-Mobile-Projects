const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const showNote = document.getElementById('show-note')

function newTodo() {
  let note;
  let item = prompt("New TODO Item", "Enter item here");
  if (item == null || item == "") {
    note = "new TODO cancelled";
    showNote.innerHTML = note;
  } else {
    createCheck(item);
    addItemCount(); 
    addUncheckedCount();   
  }
}

let itemID = 0;

function createCheck(item) {
  if (item !== '') {
    let node = document.createElement("li");
    node.className = 'todo-text'; 

    var chk = document.createElement('input');  // CREATE CHECK BOX.
    chk.setAttribute('type', 'checkbox');       // SPECIFY THE TYPE OF ELEMENT.
    chk.setAttribute('class', 'todo-checkbox');
    chk.setAttribute('id', item);

    var lbl = document.createElement('label');  // CREATE LABEL.
    lbl.setAttribute('for', item);

    // CREATE A TEXT NODE AND APPEND IT TO THE LABEL.
    lbl.appendChild(document.createTextNode(item));

    // APPEND THE NEWLY CREATED CHECKBOX AND LABEL TO THE list ELEMENT.
    node.appendChild(chk);
    node.appendChild(lbl);

    list.appendChild(node);
  }
}

function doneTodo() {
  //  get all the checkboxes
  let items = document.querySelectorAll('.todo-checkbox');

  // check each checkbox
  for (let item of items) {
    
    // update unchecked count if box is checked
    if (item.checked) {
      subtractUncheckedCount();
    }
  }
}

function addItemCount() {
  let count = Number(itemCountSpan.innerHTML);
  count += 1;
  itemCountSpan.innerHTML = count;
}

function addUncheckedCount() {
  let count = Number(uncheckedCountSpan.innerHTML);
  count += 1;
  uncheckedCountSpan.innerHTML = count;
}

function subtractUncheckedCount() {
  let count = Number(uncheckedCountSpan.innerHTML);
  count -= 1;
  uncheckedCountSpan.innerHTML = count;
}

