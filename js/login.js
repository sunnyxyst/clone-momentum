const formWrap = document.getElementById('login-wrap');
const formInput = formWrap.querySelector('#userName');
const welcomeMSG = document.getElementById('welcome-msg');
const usernameDisplay = welcomeMSG.querySelector('.user-name');
const HIDDEN_CLASSNAME = "hidden"; // hidden class name
const USERNAME_KEY = "username"; // username data

function loginSubmit(event) { 
    event.preventDefault();// form function 작성시 브라우저 기본 이벤트 발생 방지를 위한 preventDefault 선언 필수 (예. refresh)
    formWrap.classList.add(HIDDEN_CLASSNAME);
    const userName = formInput.value; // 입력한 username 
    localStorage.setItem(USERNAME_KEY, userName); // 입력한 username을 localstorage에 저장.
    greetings(userName); // greeting 영역 노출 함수 실행 
}

function greetings(userName) {
    usernameDisplay.innerText = userName;
    welcomeMSG.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localstorage에 저장된 username 값을 가져옴.

if (savedUsername === null) { //localstorage에 저장된 값이 null인 경우
    formWrap.classList.remove(HIDDEN_CLASSNAME);
    formWrap.addEventListener('submit', loginSubmit); // login-wrap form event 발생시 loginSubmit 함수 실행
} else {
    greetings(savedUsername); // 실행시 입력한 값이 아닌 localstorage에 저장되어있는 username 값을 가져옴
}
