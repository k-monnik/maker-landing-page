function validateEmail() {
    document.getElementById('message').style.display = 'none';
    let email = document.getElementById("email").value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    event.preventDefault();
    return (email.match(validRegex) ? alert('Thank you') : document.getElementById('message').style.display = 'inline')
    // {





    //     return true;

    // } else {

    //     document.getElementById('message').style.display = 'inline';
    //     setTimeout(3000);



    //     return false;

    // }

}