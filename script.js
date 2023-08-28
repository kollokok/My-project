const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", completeTask);

  li.appendChild(taskTextElement);
  li.appendChild(deleteButton);
  li.appendChild(completeButton);
  taskList.appendChild(li);

  taskInput.value = "";
}

function deleteTask(event) {
  const li = event.target.parentNode;
  taskList.removeChild(li);
}

function completeTask(event) {
  const li = event.target.parentNode;
  const taskTextElement = li.querySelector("span");
  taskTextElement.classList.toggle("completed");
}
