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
    }
    taskInputBox.value = '';    
}