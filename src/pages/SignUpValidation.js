function validateEmail(value){
    if(!value.includes("@")|| !value.includes(".")){
        return "Invalid Email";
       }
    
    return null
}
export {validateEmail}