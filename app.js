const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDEEN_CLASSNAME = "hidden";
    // string만 포함된 변수는 대문자로 표기함(일종의 관습)


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDEEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDEEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
