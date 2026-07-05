const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.querySelector("#register-username").value.trim();

    const password = document.querySelector("#register-password").value;

    const confirmPassword = document.querySelector("#confirm-password").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;
    }

    const user = {
        username,
        password
    };
    

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href = "login.html";

});