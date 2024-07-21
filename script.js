const taskInputBox = document.getElementById('task');
const taskContainer = document.getElementById('task-container');

taskInputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("add").click();
    }
  });

function addTask() {
    if (taskInputBox.value === '') {
        alert('You must assign a task!');
    }else{
        let li = document.createElement("li");
        li.innerHTML = taskInputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    taskInputBox.value = ''; 
    saveData();   
}

taskContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked'); // when clicked, the task will be marked as done
        saveData();
    } else if (event.target.tagName === 'SPAN') {
        let li = event.target.parentElement;
        taskContainer.removeChild(li); // when clicked, the task will be removed
        saveData();
    }
},false); // false is used to make sure the event is not captured in the capturing phase


function saveData() {
    localStorage.setItem('taskContainerData', taskContainer.innerHTML); // save the task list
}

function loadData() {
    taskContainer.innerHTML = localStorage.getItem('taskContainerData'); // load the task list
}
loadData();