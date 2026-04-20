const SERVER_URL = 'http://localhost:8080/api/v1/';

document.getElementById("chatForm").addEventListener('submit', ask);


async function ask(event) {
    event.preventDefault()

    const URL = SERVER_URL + "investingAi?about=" + document.getElementById('userInput').value; //Matcher input id i html
    const loading = document.getElementById('loading1'); //HUSK AT MATCHE MED HTML HER
    const result = document.getElementById('result'); //HUSK AT MATCHE MED HTML HER
    result.style.color = "black";

    try {
        loading.style.display = "block"
        const response = await fetch(URL).then(handleHttpErrors)
        console.log(response)
        result.innerText = response.answer;

        //document.getElementById('result').innerText = response.answer; Noget med HTML at gøre


    } catch (e) {
        result.style.color = "red";
        result.innerText = e.message;
    } finally {
        loading.style.display = "none";
    }
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
