let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function userInputToContainer() {

    let userInputValue = userInput.value;
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgToChatbotContainer);
    let msgToChatbot = document.createElement("span");
    msgToChatbot.textContent = userInputValue;
    msgToChatbot.classList.add("msg-to-chatbot");
    msgToChatbotContainer.appendChild(msgToChatbot);

    userInput.value = "";
}

function messageFromChatBotToUser() {
    let randomText = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgList.length - 1)];
    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgFromChatbotContainer);
    let msgFromChatbot = document.createElement("span");
    msgFromChatbot.textContent = randomText;
    msgFromChatbot.classList.add("msg-from-chatbot");
    msgFromChatbotContainer.appendChild(msgFromChatbot);

}
sendMsgBtn.onclick = function() {
    if (userInput.value === "") {
        alert("Enter Valid Message");
    } else {
        userInputToContainer();
        messageFromChatBotToUser();
    }



}
