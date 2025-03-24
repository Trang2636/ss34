let tasks = JSON.parse(localStorage.getItem("tasks")) || []
document.getElementById("addTask").addEventListener("click", addTask)
function showTasks() {
    const list = document.getElementById("taskList")
    list.innerHTML = ""
    tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.innerHTML = `${task} <button class="deleteBtn" data-index="${index}">Xóa</button>`
        list.appendChild(li)
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
    const deleteButtons = document.querySelectorAll(".deleteBtn")
    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteTask)
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value

    if (task) {
        tasks.push(task);
        input.value = ""
        showTasks();
    } else {
        alert("Vui lòng nhập nhiệm vụ!");
    }
}

function deleteTask(event) {
    const index = event.target.getAttribute("data-index")
    tasks.splice(index, 1)
    showTasks()
}
showTasks()
