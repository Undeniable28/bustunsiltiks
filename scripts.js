// Add event listener for the send button
document.getElementById('send-button').addEventListener('click', function() {
    const inputField = document.getElementById('user-input');
    const messageText = inputField.value;

    if (messageText.trim() !== '') {
        // Create new message div
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.textContent = messageText;

        // Append to chat messages
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.appendChild(messageDiv);

        // Clear input field
        inputField.value = '';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Trigger delayed responses
        sendDelayedResponses();
    }
});

// Function to send replies with a delay
function sendDelayedResponses() {
    const responses = [
        "Malaking epekto", 
        "sa bustun siltiks", 
        "aang pagkawala", 
        "ni jisun titum😞🤯",
        " sakanilang line up nila",
        "dahil sa gim 6",
        "natalo sila sa Nyu yurk niks😫😫",
        "kung kamakailan si jisun titum",
        "nagkaroon ng injuri dahilan😭😭🥀🥀",
        "Hindi sya nakalaro sa gim 6",
        "at nayari na sila sa",
        "kamay ng Nyu yurk niks🫰🤯😫😭",
        "at sa bustun siltiks pans ind sison",
        "na ang ating tim😢😢😭😭🥀🥀😞"
    ];
    const initialDelay = 1000; // 1 second delay before the first response
    const responseDelay = 1800; // 2 seconds delay between responses

    // Initial delay before sending responses
    setTimeout(() => {
        responses.forEach((response, index) => {
            setTimeout(() => {
                // Simulate sending a message in the chat
                sendMessageToChat(response);
            }, responseDelay * index);
        });
    }, initialDelay);
}

// Function to mimic sending a message to the chat
function sendMessageToChat(message) {
    // Create new message div
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message received';
    messageDiv.textContent = message;

    // Append to chat messages
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
