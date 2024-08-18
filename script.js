// Get DOM elements  
const taskInput = document.getElementById("taskInput");  
const addTaskButton = document.getElementById("addTaskButton");  
const taskList = document.getElementById("taskList");  

let currentEditTask = null; // Variable to store the task being edited  

// Add task event  
addTaskButton.addEventListener("click", addTask);  

// Function to add a task  
function addTask() {  
    const taskText = taskInput.value.trim();  
    if (taskText === "") {  
        alert("Please enter a task!");  
        return;  
    }  

    if (currentEditTask) {  
        // If we're editing an existing task  
        currentEditTask.textContent = taskText;  
        currentEditTask = null; // Reset the editing task  
        taskInput.value = ""; // Clear input  
        addTaskButton.textContent = "Add Task"; // Reset button text  
        return;  
    }  

    // Create a new list item  
    const li = document.createElement("li");  
    li.textContent = taskText;  

    // Create a checkbox for marking as completed  
    const checkbox = document.createElement("input");  
    checkbox.type = "checkbox";  
    checkbox.onclick = function () {  
        li.classList.toggle("completed"); // Toggle 'completed' class on checkbox click  
    };  

    // Create edit button  
    const editButton = document.createElement("button");  
    editButton.textContent = "Edit";  
    editButton.onclick = function () {  
        editTask(li);  
    };  

    // Create delete button  
    const deleteButton = document.createElement("button");  
    deleteButton.textContent = "Delete";  
    deleteButton.onclick = function () {  
        taskList.removeChild(li);  
    };  

    // Append the checkbox, edit and delete buttons to the list item  
    li.prepend(checkbox); // Add checkbox at the start  
    li.appendChild(editButton);  
    li.appendChild(deleteButton);  

    // Append the list item to the task list  
    taskList.appendChild(li);  

    // Clear input  
    taskInput.value = "";  
}  

// Function to edit a task  
function editTask(li) {  
    taskInput.value = li.childNodes[1].textContent; // Set input value to the task text  
    currentEditTask = li.childNodes[1]; // Store the current task being edited  
    addTaskButton.textContent = "Save Task"; // Change button text to indicate 'save' action  
}  
