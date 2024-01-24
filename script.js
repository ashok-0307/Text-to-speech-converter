//Get the input element and button element
const inputText = document.getElementById("input-text");
const button = document.getElementById("button");

// Event Listner
button.addEventListener("click", function () {
  const text = inputText.value;

  if (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.voice = speechSynthesis.getVoices()[10];
    speechSynthesis.speak(utterance);
  } else {
    alert("Please enter some text to convert to speech");
  }
});
