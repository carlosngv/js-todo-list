// Selectors

const addBtn = document.querySelector('.add-button');
const addInput = document.querySelector('.main-input');
const todoContainer = document.querySelector('.todo-container')

// Events
addBtn.addEventListener('click', addItem);
todoContainer.addEventListener('click', deleteCheck);


// Functions

function addItem( e ) {

    e.preventDefault();

    let addValue = addInput.value;

    let fragment = document.createDocumentFragment();

    let div = document.createElement('div');
    div.classList.add('todo-item');

    let li = document.createElement('li');

    let input = document.createElement('input');
    input.classList.add('todo-input');
    input.readOnly = true;
    input.value = addValue;

    let btnCheck = document.createElement('button');
    btnCheck.classList.add('check-button');

    let checkIcon = document.createElement('i');
    checkIcon.classList.add('fas');
    checkIcon.classList.add('fa-check');
    btnCheck.appendChild(checkIcon);

    let btnTrash = document.createElement('button');
    btnTrash.classList.add('trash-button');

    let trashIcon = document.createElement('i');
    trashIcon.classList.add('fas');
    trashIcon.classList.add('fa-trash');
    btnTrash.appendChild(trashIcon);

    div.appendChild(li)
    div.appendChild(input);
    div.appendChild(btnCheck);
    div.appendChild(btnTrash);



    fragment.appendChild(div);

    todoContainer.appendChild(fragment);

    addInput.value = '';



}

function deleteCheck( e ) {

    let todoElement = e.target;
    let todoItem = todoElement.parentNode;
    let todoClass = todoElement.classList[0];
    let todoItemInput = todoItem.childNodes[1];

    console.log(todoClass);
    if( todoClass === 'trash-button' ) {

        // Adding animations
        todoItem.style.transition = 'transform 1s ease';

        todoItem.style.transform = 'rotate(120deg) translateY(-100vh)';
        todoItem.style.opacity = '0.4';

        // This event avoids to abrupt remove the item without waiting for transitions;
        todoItem.addEventListener('transitionend', () => {
            todoItem.remove();
        });

    } else if( todoClass === 'check-button' ) {
        console.log(e.target);
        todoItem.style.opacity = 0.4
        todoItemInput.style.textDecoration = 'line-through'
    }


}
