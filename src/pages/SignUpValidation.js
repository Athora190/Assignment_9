


function validateFirstLastName(value){
    if(value.length < 2 )
    {
        return "invalid";
    }
    if(value.length > 50)
    {
        return "that's a long name";
    }
    if(/\d/.test(value))
    {
        return "Does your name really include numbers?";
    }
    return null;

}

function validateEmail(value){
    if(!value.includes("@")|| !value.includes(".")){
        return "Invalid Email";
       }
    
    return null
    }

function validatePassword (password, confirmationPassword) {
    if (password.length < 5) {
        return 'Password must be at least 5 characters'
    }

    if (!/\d/g.test(password)) {
        return 'Password must contain at least 1 number'
    }

    const specialCharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g
    if (!specialCharacterRegex.test(password)) {
        return 'Password must contain at least 1 special character'
    }

    if (password !== confirmationPassword) {
        return 'Passwords must match'
    }

    return null
}

export {validateFirstLastName, validateEmail, validatePassword}
