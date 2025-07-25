const inputBox = document.getElementById("email");
const inputContainer = inputBox.parentElement;

//add event keydown to input
// if user retype it, It should check it again
inputBox.addEventListener("keydown", () => {
    if (inputBox.classList.contains("red-border")) {
        inputBox.classList.remove("red-border");
        
        const errorIcon = document.getElementById("error-img");
        const errorMsg = document.getElementById("error-msg");
        errorIcon.remove();
        errorMsg.remove();
    }
})

//add event listener to button
const submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", () => {
    // if it already has an error, don't check it
    if (!inputBox.classList.contains("red-border")) {
        checkInput();
    }
});

// Receive an error message when the `form` is submitted if:
//   - The `input` field is empty
//   - The email address is not formatted correctly
// check input
function checkInput() {
    // if value is empty
    if (inputBox.value === "") {
        // disply error
        displayError();
    } else {
        //if it's not empty, check its format
        const emailFormat = checkEmail();
        // if not format correctly, display error.
        // Otherwise means format correct.
        if (emailFormat === false) {
            displayError();
        } else {
            alert("email format is correct.");
        }
    }
}

function displayError() {
    // add red border
    inputBox.classList.add("red-border");
    
    // add error icon, error message
    // <img class="error-icon" src="./images/icon-error.svg" width="24" height="24" alt="error icon">
    // <p class="error-message">Please provide a valid email</p>
    inputContainer.insertAdjacentHTML("beforeend", `
        <img id="error-img" class="error-icon" src="./images/icon-error.svg" width="24" height="24" alt="error icon">
        <p id="error-msg" class="error-message">Please provide a valid email</p>
        `);
}

function checkEmail() {
    const emailExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailExp.test(inputBox.value);
}