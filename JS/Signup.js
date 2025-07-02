const nameInput = document.querySelector(".NameInput");
const emailInput = document.querySelector(".EmailInput");
const passwordInput = document.querySelector(".PasswordInput");
const signupButton = document.querySelector(".SignupButton");

var users = [];
var user;

signupButton.addEventListener('click' , SignUp);

if (localStorage.getItem('users') != null) {
    users = JSON.parse(localStorage.getItem('users'));
}

function SignUp()
{
    if(CheckInputs())
    {
        AddUser();
        window.location.href = 'index.html';
    }
}

function CheckInputs()
{
    if(nameInput.value == "")
    {
        Swal.fire({
            title: "Name Required",
            text: "Please enter your Name",
            icon: "warning"
        });
        return false;
    }

    if(emailInput.value == "")
    {
        Swal.fire({
            title: "Email Required",
            text: "Please enter your Email",
            icon: "warning"
        });
        return false;
    }

    if(passwordInput.value == "")
    {
        Swal.fire({
            title: "Password Required",
            text: "Please enter your Password",
            icon: "warning"
        });
        return false;
    }

    if(!ValidateEmail())
    {
        Swal.fire({
            title: "Incorrect Email",
            text: "Please, Enter a valid email",
            icon: "warning"
        });
        return false;
    }

    if(CheckForUser())
    {
        Swal.fire({
            title: "User Already Exists",
            text: "Please, Enter a new user email",
            icon: "warning"
        });
        return false;
    }

    return true;
}

function ValidateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput.value);
}

function CheckForUser()
{
    if(users.length > 0)
    {
        for(let i = 0 ; i < users.length ; i ++)
        {   
            if(users[i].email.toLowerCase() == emailInput.value.toLowerCase())
            {
                return true;
            }
        }
    }

    return false;
}

function AddUser()
{
    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    users.push(user);
    localStorage.setItem("users" , JSON.stringify(users));
}