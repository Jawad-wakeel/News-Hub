function populateInput(){
   const sampleCode = document.querySelector(".actualCode").innerText;
   document.querySelector("#codeInputBox").value=sampleCode;
   document.querySelector(".submitBtn").classList.remove("disable-state");
}

function inputChange(event) {
    if (event.target.value.length < 4) {
        document.querySelector(".submitBtn").classList.add("disable-state");
    } else {
        document.querySelector(".submitBtn").classList.remove("disable-state");
    }
}

    