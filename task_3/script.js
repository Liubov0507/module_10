/*Задание 3.
Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:
img
Добавить в чат механизм отправки гео-локации:
img
При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку
на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно эхо-сервер, не выводить.*/

const wsUrl = "wss://echo.websocket.org/";

function pageLoaded() {
  const mailWindow = document.querySelector(".mail-window");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn-send");
  const btnLocation = document.querySelector(".btn-location");
  
  let socket = new WebSocket(wsUrl);
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  };
  
 sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "server-message" : "client-message"}">${message}</div>`;
    mailWindow.innerHTML += messageHTML;
  }
  
  btnLocation.addEventListener('click', () => {
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    navigator.geolocation.getCurrentPosition(success);
  }
});

  const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  writeToChat
  (`<span class="geo-message">
  <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Гео-локация</a></span>`);
   };
}

document.addEventListener("DOMContentLoaded", pageLoaded);


/*
const wsUrl = "wss://echo.websocket.org/";

const btnSend = document.querySelector('.btn-send');
const mailWindow = document.querySelector('.mail-window');
const btnLocation = document.querySelector('.btn-location');

let websocket = new WebSocket(wsUrl);

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  mailWindow.appendChild(pre);
}

btnSend.addEventListener('click', () => {
  const message = document.querySelector('input').value;
  writeToScreen(`<span class="client-message">${message}</span>`);
  websocket.send(message);

  websocket.onmessage = function(evt) {
    writeToScreen(`<span class="server-message">${evt.data}</span>`);
  };
});

btnLocation.addEventListener('click', () => {
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    navigator.geolocation.getCurrentPosition(success);
  }
});

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  writeToScreen
  (`<span class="client-message">
  <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Гео-локация</a></span>`);
};*/