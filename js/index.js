const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conpassword = document.getElementById('con-password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validate();
});



const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const conpasswordVal = conpassword.value.trim();

    //Validating username
    if(usernameVal === "")
    {
        setErrorMsg(username, 'username cannot be empty');
    }
    else if(usernameVal.length <= 2)
    {
        setErrorMsg(username, 'username minimum 3 characters');
    }
    else
    {
        setSuccessMsg(username);
    }

    //Validate email ID
    if(emailVal === "")
    {
        setErrorMsg(email, 'email cannot be empty');
    }
    else if(!isEmail(emailVal))
    {
        setErrorMsg(email, 'not a valid email ID');
    }
    else
    {
        setSuccessMsg(email);
    }

    //Validating Phone no.
    if(phoneVal === "")
    {
        setErrorMsg(phone, 'phone no. cannot be empty');
    }
    else if(phoneVal.length != 10)
    {
        setErrorMsg(phone, 'phone no. has to be 10 digits');
    }
    else
    {
        setSuccessMsg(phone);
    }

    //Validating Password
    if(passwordVal === "")
    {
        setErrorMsg(password, 'password cannot be empty');
    }
    else if(passwordVal.length < 6)
    {
        setErrorMsg(password, 'password must have min. 6 characters');
    }
    else
    {
        setSuccessMsg(password);
    }

    //Validating re-entered password
    if(conpasswordVal === "")
    {
        setErrorMsg(conpassword, 'password cannot be empty');
    }
    else if(conpasswordVal != passwordVal)
    {
        setErrorMsg(conpassword, 'password does not match');
    }
    else
    {
        setSuccessMsg(conpassword);
    }

    //If every data gets a success, then do something
    successfull();
    //allSuccessMsg(usernameVal);
}

function setErrorMsg(input, errormsg) {
    //To get which form control am I working with
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function successfull() {
    const formCon = document.getElementsByClassName('form-control');
    let count = 0;
    for(var i=0; i<formCon.length; i++)
    {
        if(formCon[i].className === "form-control success")
        {
            count = count + 1;
        }
    }
    if(count === formCon.length)
    {
        console.log("Ho gaya");
        window.close();
        window.open('../registered.html')
        /*for(var i=0; i<formCon.length; i++)
        {
            formCon[i].children[1].value = "";
        }*/
    }       
}

/*function allSuccessMsg(usernameVal) {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i=0; i<formCon.length; i++)
    {
        if(formCon[i].className === "form-control success")
        {
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        }
        else
        {
            return false;
        }
    }
}*/

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    //@ should not be at the beginning
    if(atSymbol < 1)
        return false;
    
    var atDot = emailVal.lastIndexOf(".");
    //At least 2 letters between . and @
    if(atDot <= atSymbol+2)
        return false;
    //The email should not end with a dot
    if(atDot === emailVal.length - 1)
        return false;

    return true;
}