var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var msgError = document.getElementById("msg-error");
var submitError = document.getElementById("submit-error");


function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Full name required";
        return false;
    }
    nameError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Phone no. is required";
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = "Phone no. should be 11 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    phoneError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}
function validateMessage(){
    var msg = document.getElementById("contact-msg").value;
    var required = 30;
    var left = required - msg.length;
    if(msg.length == 0){
        msgError.innerHTML = "Message is required";
        return false;
    }
    if(left > 0){
        msgError.innerHTML = left + "more characters required";
        return false;
    }
    msgError.innerHTML = `<i class="fas fa-check-circle"></i>`;
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        //submitError.style.color = "green";
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = "none";}, 4000);
        return false;
    }
    else{
        submitError.style.display = "block";
        submitError.style.color = "green";
        submitError.innerHTML = "Form Submitted Succesfully";
        setTimeout(function(){submitError.style.display = "none";}, 4000);
        return false;
    }
}