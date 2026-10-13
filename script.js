function fillMessage(text) {

    document.getElementById("messageInput").value = text;

}


function sendMessage() {

    let message = document.getElementById("messageInput").value;

    if (message == "") {

        alert("Please enter a message");

    } else {

        alert("You typed: " + message);

        document.getElementById("messageInput").value = "";

    }

}