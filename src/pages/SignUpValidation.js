

function validateFirstLastName(value){
    if(value.length < 2 )
    {
        return "invalid";
    }
    if(value.length > 20)
    {
        return "that's a long name";
    }
    if(/\d/.test(value))
    {
        return "Does your name really include numbers?";
    }
    return null;

}
export {validateFirstLastName};
