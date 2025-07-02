const userName = document.querySelector(".UserName");
const logoutButton = document.querySelector(".LogoutButton")

logoutButton.addEventListener('click', Logout);


if (localStorage.getItem("LoggedInUser")) {
    userName.textContent = localStorage.getItem("LoggedInUser");
}


function Logout() {
    window.location.href = 'index.html';
}