
const emailBtn = document.getElementById("button");
emailBtn.addEventListener("click", validateEmail);

const emailInput = document.getElementById("email");
emailInput.addEventListener("click", resetForm());

function validateEmail() {
    document.getElementById('message').style.display = 'none';
    let email = document.getElementById("email").value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // e.preventDefault();
    return (email.match(validRegex) ? alert('Thank you!') : document.getElementById('message').style.display = 'block');

}

function resetForm() {
    let email = document.getElementById("email").value;
    if (email === "") {
        return document.getElementById('message').style.display = 'none';
    }

}

