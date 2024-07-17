const listItems = document.getElementsByTagName("li");

var i;
for (i = 0; i < listItems.length; i++) {
  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  listItems[i].appendChild(span);
}

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
  input.value = "";
  updateTaskCount();
  var span = document.createElement("span");
  var text = document.createTextNode("X");
  span.className = "close";
  span.appendChild(text);
  listItem.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    updateTaskCount();
  }
  updateTaskCount();
}

function updateTaskCount() {
  const totalTasks = document.getElementById("todoList").children.length;
  const completedTasks = document.querySelectorAll("#todoList .checked").length;
  document.getElementById(
    "taskCount"
  ).innerText = `Total tasks: ${totalTasks} | Completed tasks: ${completedTasks}`;
}
for (var i = 0; i < listItems.length; i++) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = toggleChecked;
  listItems[i].insertBefore(checkbox, listItems[i].firstChild);
}

updateTaskCount();
