var message = prompt("type your message here");
var messageUnder10 = message.slice(0, 10);
alert(messageUnder10);
console.log("User has entered " + message.length + " characters");

// or //

// alert(prompt("Type your message here").slice(0,10))
