let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
    const list = document.getElementById("list");
    list.innerHTML = ""

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const editBtn = document.createElement("button");
        editBtn.textContent = "Sửa";
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

function addTask() {
    const myInput = document.getElementById("myInput");
    if (myInput.value.trim() !== "") {
        tasks.push(myInput.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        myInput.value = "";
        renderTasks();
    }
}

function editTask(index) {
    const newTask = prompt("Chỉnh sửa công việc:", tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}
document.getElementById("add").addEventListener("click", addTask);

renderTasks();
