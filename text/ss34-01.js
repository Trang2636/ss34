function getAcc() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveAcc(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

let send = document.getElementById("send");

send.onclick = function () {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    if (email === "" || password === "" || confirm === "") {
        alert("Không được để trống!");
        return;
    }


    if (!email.endsWith("@gmail.com") || email.includes(" ")) {
        alert("Email không hợp lệ! Hãy nhập email kết thúc bằng '@gmail.com' và không có khoảng trắng.");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }
    if (password !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }
    const users = getAcc();
    let userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("Email này đã được đăng ký!");
        return;
    }
    users.push({ email: email, password: password });
    saveAcc(users);

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
};
