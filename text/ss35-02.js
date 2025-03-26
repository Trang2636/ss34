let links = JSON.parse(localStorage.getItem("link")) || [];
let addBtn = document.querySelector(".add");
let saveBtn = document.querySelector(".save");
let cancelBtn = document.querySelector(".cancel");
let container = document.querySelector(".websites");
let addContainer = document.querySelector(".addContainer");
let body = document.getElementById("body");

addContainer.classList.add("hide");
renderLinks();

function renderLinks() {
    container.innerHTML = "";
    links.forEach((link, index) => {
        let item = document.createElement("section");
        item.className = "toLink";
        item.setAttribute("data-index", index);
        item.innerHTML = `
            <img src="${link.url}/favicon.ico" alt="">
            ${link.name}
            <button class="del" data-index="${index}">x</button>
        `;
        container.appendChild(item);
    });

    document.querySelectorAll(".del").forEach((btn) => {
        btn.onclick = function () {
            removeLink(this.getAttribute("data-index"));
        };
    });

    document.querySelectorAll(".toLink").forEach((btn) => {
        btn.onclick = function (event) {
            if (event.target === this) {
                window.location.href = links[this.getAttribute("data-index")].url;
            }
        };
    });

    localStorage.setItem("link", JSON.stringify(links));
}

function removeLink(index) {
    links.splice(index, 1);
    renderLinks();
}

addBtn.onclick = function () {
    body.classList.toggle("overlay");
    addContainer.classList.toggle("hide");
};

saveBtn.onclick = function () {
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    
    if (name && url) {
        links.push({ name, url });
        renderLinks();
    } else {
        alert("Invalid input");
    }

    body.classList.toggle("overlay");
    addContainer.classList.toggle("hide");
};

cancelBtn.onclick = function () {
    body.classList.toggle("overlay");
    addContainer.classList.toggle("hide");
};