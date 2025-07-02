const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const loginButton = document.querySelector(".LoginButton")

loginButton.addEventListener('click', Login);
var users = [];
var user;

if (localStorage.getItem('users') != null) {
    users = JSON.parse(localStorage.getItem('users'));
}


function Login() {
    CheckEmailAndPassword();
}

function ValidateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput.value);
}

function CheckEmailAndPassword() {
    if (emailInput.value == "") {
        Swal.fire({
            title: "Email Required",
            text: "Please enter your Email",
            icon: "warning"
        });
        return;
    }

    if (passwordInput.value == "") {
        Swal.fire({
            title: "Password Required",
            text: "Please enter your password",
            icon: "warning"
        });
        return;
    }


    if (!ValidateEmail()) {
        Swal.fire({
            title: "Incorrect Email",
            text: "Please, Enter a valid email",
            icon: "warning"
        });
        return;
    }
    else {
        if (CheckForUsers()) {
            if (passwordInput.value == user.password) {
                localStorage.setItem('LoggedInUser', user.name);
                console.log(localStorage.getItem("LoggedInUser"));
                window.location.href = 'Welcome.html';
                return;
            }
        }
        Swal.fire({
            title: "Incorrect Email or Password",
            icon: "warning"
        });
    }
}

function CheckForUsers() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
            user = users[i];
            return true;
        }
    }

    return false;
}