'use strict';

let whoami = document.querySelector('[data-bind="whoami"]'),
    text = document.querySelector('[data-bind="text"]'),
    chat = document.querySelector('[data-bind="chat"]'),
    output = document.querySelector('[data-bind="output"]'),
    // create ws connection
    rtm = new WebSocket('ws://localhost:8001');

rtm.onmessage = (e) => {
    let data = JSON.parse(e.data);
    output.innerHTML += `${data.whoami} says: ${data.text} <br/>`;
}

rtm.onerror = (e) => console.error(`Error: ${e.message}`);

chat.addEventListener('submit', (e) => {
    e.preventDefault();

    rtm.send(JSON.stringify({
        whoami: whoami.value,
        text: text.value
    }));
});