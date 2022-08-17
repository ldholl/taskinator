
//tells the JS to find the form element in the page and save it to the variable formEl so we can interact with it and target its child elements
var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event){

    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

//adding the .addEventListener method to the formEl object. Assigning "subit (a form-specific event that listens for both buttons with a type attribute of 'submit' and keyboard enters) 
formEl.addEventListener("submit", createTaskHandler);
