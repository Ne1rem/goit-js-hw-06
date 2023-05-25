const textInput = document.querySelector("#validation-input");
const lengthOfInput = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (textInput.value.length >= Number(lengthOfInput)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});