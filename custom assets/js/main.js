//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo-list');
const validate = document.querySelector('.validate');


//Event Listeners
// todoButton.addEventListener('click', addTodo);
todoButton.addEventListener('click', function(){
    var x = todoInput.value;
    if (x == "") {
        // alert("Name must be filled out");
        validate.innerText = "Please fill this out";
        validate.style.display = "flex";
        return false;
    }else{
        validate.style.display = "none";
        addTodo();
    }
});

todoList.addEventListener('click',checkDelete);

//Functions
function addTodo(){
    //prevent form from submiting
    // event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    newTodo.classList.add("list-group-item");
    todoDiv.appendChild(newTodo);

    //check btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    completedButton.classList.add("btni");
    // completedButton.classList.add("btn-success");
    todoDiv.appendChild(completedButton);


    //Trash btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    trashButton.classList.add("btni");
    // trashButton.classList.add("btn-danger");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value = '';
}

function checkDelete(e) {
    const item = e.target;
    if(item.classList[0] === "trash-btn"){

        //animation
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
        });
    }
    
    //check mark click
    if(item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle("completed");
    }
}