function checkPass() {
    pass = document.getElementById("password").value;
    cpass = document.getElementById("cpassword").value;
    console.log(pass);
    console.log(cpass);

    if (pass == cpass) {
        alert("Correct Password");
    }
    else {
        alert("Incorrect Password");
    }
}

function checkEmail(){
    email = document.getElementById("email").value;
    console.log(email);
    let flag;
    for (let i = 0; i < email.length; i++) {
        let element = email[i];
        if(element == '@'){
            alert("Valid Email Address");
            flag++;
        }
        else{
            continue;
        }
    }
    if (flag == 0) {
        alert("Invalid Email Address")
    }
}