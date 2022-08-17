
//tells the JS to find the form element in the page and save it to the variable formEl so we can interact with it and target its child elements
var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event){

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
//check if input values are empty strings
if(!taskNameInput || !taskTypeInput){
    alert("You need to fill out the task form!");
    return false;
}
//empty form input after a submission
formEl.reset();
//package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
//send it as arg to createTaskEl
    createTaskEl(taskDataObj);

}

//Function to take in task name and title as args and create added html

var createTaskEl = function(taskDataObj){
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info"; 
    //add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(taskInfoEl);   
}

//adding the .addEventListener method to the formEl object. Assigning "subit (a form-specific event that listens for both buttons with a type attribute of 'submit' and keyboard enters) 
formEl.addEventListener("submit", taskFormHandler);
