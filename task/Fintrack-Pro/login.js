const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.querySelector("#login-username").value.trim();

    const password = document.querySelector("#login-password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));
    console.log(savedUser);

    if (!savedUser) {

        alert("Please Register First");

        return;
    }

    if (
        username === savedUser.username &&
        password === savedUser.password
    ) {

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";

    } else {

        alert("Invalid Username or Password");

    }

});