const listItems = document.getElementsByTagName("li");

// Applying close button to the list items
var i;
for (i = 0; i < listItems.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  listItems[i].appendChild(span);
}

// Removing list item(s) on clicking the close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    setTimeout(() => {
      div.remove();
      updateTaskCount();
    }, 1000);
  };
}

function toggleChecked(event) {
  event.target.parentElement.classList.toggle("checked");
  updateTaskCount();
}

function addCloseHandler(close) {
  close.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    setTimeout(() => {
      div.remove();
      updateTaskCount();
    }, 1000);
  };
}

// Adding new todo llist items
function addTodoItem() {
  var ulItem = document.getElementById("todoList");
  var listItem = document.createElement("li");
  var inputItem = document.getElementById("input").value;
  var input = document.getElementById("input");
  var title = document.createTextNode(inputItem);
  var checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.onclick = toggleChecked;

  listItem.appendChild(checkbox);

  listItem.appendChild(title);
  if (inputItem == "") {
    alert("You must give a todo title");
  } else {
    ulItem.appendChild(listItem);
  }

  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  listItem.appendChild(span);

  addCloseHandler(span);

  input.value = "";
  updateTaskCount();
}

// Updating total todo items based on total todos present and tasks completed
function updateTaskCount() {
  const totalTasks = document.getElementById("todoList").children.length;
  const completedTasks = document.querySelectorAll("#todoList .checked").length;
  document.getElementById(
    "taskCount"
  ).innerText = `Total tasks: ${totalTasks} | Completed tasks: ${completedTasks}`;
}

// Applying checkbox on the list items
for (var i = 0; i < listItems.length; i++) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = toggleChecked;
  listItems[i].insertBefore(checkbox, listItems[i].firstChild);
}

updateTaskCount();
