document.getElementById("loginForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ Email và Mật khẩu!");
        return;
    }
    let userData = JSON.parse(localStorage.getItem("user")) || {};
    if (email === userData.email && password === userData.password) {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html"
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});
