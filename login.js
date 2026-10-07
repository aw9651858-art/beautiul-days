const loginBtn = document.getElementById("loginBtn");

const username = document.getElementById("username");
const password = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

loginBtn.onclick = function () {

    if (username.value.trim() === "" || password.value.trim() === "") {

        errorMessage.innerHTML =
            " اكتبي الاول ي روحي❤️";

        return;
    }

    if (
        username.value === "love" &&
        password.value === "10/4"
    ) {

       const welcome = document.getElementById("welcome");

welcome.style.display = "flex";

setTimeout(function () {
    window.location.href = "main.html";
}, 2500);
    } else {

        errorMessage.innerHTML =
            " غلط ي حبيتي ركزي❤️";
    }
};