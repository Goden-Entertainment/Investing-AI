const SERVER_URL = 'http://localhost:8080/api/v1/';

document.getElementById("chatForm").addEventListener('submit', ask);


async function ask(event) {
    event.preventDefault()

    const userInput = document.getElementById('userInput').value;
    if (!userInput.trim()) return;

    const URL = SERVER_URL + "investingAi?about=" + document.getElementById('userInput').value; //Matcher input id i html
    const loading = document.getElementById('loading1'); //HUSK AT MATCHE MED HTML HER
    //const result = document.getElementById('result'); //HUSK AT MATCHE MED HTML HER
   // result.style.color = "black";

    // Vis brugerens besked i chatten
    appendMessage("you", userInput, "user-message");
    document.getElementById('userInput').value = '';

    try {
        if (loading) loading.style.display = "block"; // ← tjek at den findes
        loading.style.display = "block"
        const response = await fetch(URL).then(handleHttpErrors)
        console.log(response)
        //result.innerText = response.answer;

        appendMessage("AI", response.answer, "ai-message")


    } catch (e) {
        appendMessage("Error", e.message, "error-message");
        //result.style.color = "red";
        //result.innerText = e.message;
    } finally {
        loading.style.display = "none";
    }
}

function appendMessage(sender, text, cssClas){
    const messages = document.getElementById('messages')
    const div = document.createElement('div')
    div.classList.add('message', cssClas)
    div.innerHTML =  `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(div)
    messages.scrollTop = messages.scrollHeight;
}

async function getInfo(event) {

    event.preventDefault();

}

async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const msg = errorResponse.message ? errorResponse.message : "No error details provided"
        throw new Error(msg)
    }
    return res.json()
}
