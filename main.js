var text = document.getElementById("text").innerHTML;
var newText = "";
var speed = 40; // The delay between each character in milliseconds

function type() {
  if (newText.length < text.length) {
    newText += text.charAt(newText.length);
    document.getElementById("text").innerHTML = newText;
    setTimeout(type, speed);
  }
}

type();
