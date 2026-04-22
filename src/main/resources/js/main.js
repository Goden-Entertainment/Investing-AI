// const form = document.getElementById("chat");
// const input = document.getElementById("userInput");
// const messages = document.getElementById("messages");
//
// //reset chat
// function clearChat() {
//     messages.innerHTML = '';
// }
//
// //add messages bubble for ai and user.
// function addMessage(text, who) {
//     messages.innerHTML += `<div class="message ${who}">${text}</div>`;
//     messages.scrollTop = messages.scrollHeight;
// }
//
// //When the user submits a question
// form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//
//     const question = input.value.trim();
//     if (!question) return;
//
//     addMessage(question, "user");
//     input.value = "";
//
//     try {
//         const response = await fetch("http://localhost:8080/api/v1/investingAi?about=" + question);
//         const answer = await response.json();
//         addMessage(answer, "ai");
//     } catch (error) {
//         console.error("Failed to fetch answer:", error);
//         addMessage("Error: " + error.message, "ai");
//     }
// });
//
// //click button. Suggestions fill the input.
// document.querySelectorAll('.suggestion').forEach(suggestion => {
//     suggestion.addEventListener('click', () => {
//         input.value = suggestion.textContent;
//         input.focus();
//     });
// });
//
// document.getElementById('clearChat').addEventListener('click', clearChat);