function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = "";
    employees.forEach((emp, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${emp.name}</td>
            <td>${emp.position}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addEmployee() {
    let name = document.getElementById("name").value
    let position = document.getElementById("position").value
    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin")
    }
    let employees = JSON.parse(localStorage.getItem("employees")) || []
    employees.push({ name, position })
    localStorage.setItem("employees", JSON.stringify(employees))
    loadEmployees()
    document.getElementById("name").value = ""
    document.getElementById("position").value = ""
    document.addEventListener("DOMContentLoaded", loadEmployees)
}