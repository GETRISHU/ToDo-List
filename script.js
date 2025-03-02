const input = document.getElementById("takeInput");
const maindiv = document.getElementById("main");

let todo = [];
function todolist() {
    if (input.value.trim() === '') {  
        alert("Write your wish before continuing...");
        return;  
      }
  todo.push({
    task: input.value,
  });
  input.value = '';
  datashow();
}

function datashow() {
  maindiv.textContent = "";
  todo.forEach((t, ind) => {
    const div = document.createElement("div");
    div.classList.add("task");
    const taskname = document.createElement("p");
    taskname.textContent = t.task;
    const button = document.createElement("button");
    if (todo.length === 0) {  
        alert("Please add your Wish");
    } else {
        button.textContent = "🗑️";  
    }
    button.onclick = function () {
      const res = confirm("Wait! Do you really want to delete it?");
      if (res) {
        todo.splice(ind, 1);
        // alert("😭, you deleted a wish");
        datashow();
      }
    };
    div.append(taskname, button);
    maindiv.appendChild(div);
    input.value = "";
  });
}



