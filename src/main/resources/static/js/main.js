const SERVER_URL = 'http://localhost:8080/api/v1/';
const messages = document.getElementById("messages");
const input = document.getElementById("userInput");


document.getElementById("chatForm").addEventListener('submit', ask);

document.getElementById("clearChat").addEventListener('click', () => {
    messages.innerHTML = '';
});

//click button. Suggestions fill the input.
document.querySelectorAll('.suggestion').forEach(suggestion => {
    suggestion.addEventListener('click', () => {
        input.value = suggestion.textContent;
        input.focus();
    });
});

async function ask(event) {
    event.preventDefault()

    const question = input.value;
    const symbol = document.getElementById('search').value.toUpperCase();

    const URL = SERVER_URL + "investingAi?about=" + question + "&symbol=" + symbol;

    const loading = document.getElementById('loading1');
    const result = document.getElementById('result');
    result.style.color = "black";

    appendMessage(question, 'user');

    try {
        loading.style.display = "block"
        const response = await fetch(URL).then(handleHttpErrors)
        console.log(response)
        appendMessage(response.answer, 'bot');
        result.innerText = '';

    } catch (e) {
        result.style.color = "red";
        result.innerText = e.message;
    } finally {
        loading.style.display = "none";
    }
}

function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.classList.add('message', sender);
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

async function getInfo(event){
    event.preventDefault();
    //Byg mere.
}

async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const msg = errorResponse.message ? errorResponse.message : "No error details provided"
        throw new Error(msg)
    }
    return res.json()
}