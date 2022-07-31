// document.getElementById("registerEmail").addEventListener("submit", (event) => {
//     document.getElementById('message').style.display = 'none';
//     let email = document.getElementById("email").value;
//     const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (document.getElementById("email").value === "") {
//         event.preventDefault();
//         return (email.match(validRegex) ? alert('Thank you') : document.getElementById('message').style.display = 'block')
//     }
// });

const emailBtn = document.getElementById("button");
emailBtn.addEventListener("click", validateEmail);

function validateEmail() {
    document.getElementById('message').style.display = 'none';
    let email = document.getElementById("email").value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // e.preventDefault();
    return (email.match(validRegex) ? alert('Thank you') : document.getElementById('message').style.display = 'block')

}


// & (document.getElementById("registerEmail").reset())
// function resetForm(){
//     if validateEmail
// }

// document.getElementById("email").reset();