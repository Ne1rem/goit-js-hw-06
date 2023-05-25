const textInput = document.querySelector("#name-input")
const textOutput = document.querySelector(`#name-output`)

textInput.addEventListener("input", (element)=> {
    textOutput.textContent = element.currentTarget.value
    if(element.currentTarget.value == ""){
        textOutput.textContent = "Anonymous"
    }
})
