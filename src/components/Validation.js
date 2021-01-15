


function validate_first_name(value){

    if(value.length < 3){
	return 'Must be at least 3 characters long';
    }
    if(value.length > 20){
	return 'Cannot be more than 20 characters long'
    }

    if(value.includes('1','2','3','4','5','6','7','8','9','0')  ){
        return 'Cannot include a number'
        }
    
    return null;
}

function validate_last_name(value){
    if(value.length < 3){
	return 'Must be at least 3 characters long';
    }
    if(value.length > 20){
	return 'Cannot be more than 20 characters long'
    }

    if(value.includes('1','2','3','4','5','6','7','8','9','0') ){
        return 'Cannot include a number'
        }
    
    return null;
}

function validate_email(value){
    if(!value.includes('@')){
	return 'Invalid email';
    }

    if(!value.includes('.')){
        return 'Invalid email';
        }

    return null;
}

function validate_phone_number(value){
    if(value ===('')){
	return 'This field needs an input';
    }

    if(value.length < 7 ){
        return 'This number is too short';
        } 
    if(value.length > 11 ){
        return 'This number is too long';
            } 

    if(!value.includes('1','2','3','4','5','6','7','8','9','0') ){
                return 'Invalid Number'
    }
    
    return null;
}

function validate_inquiry(value){

    let result = value.length > 0 ? "OK" : "ERROR";
    if(result === "ERROR"){
    return 'This field needs an input';
        }
        
}


export {validate_first_name,
validate_last_name,
validate_email, 
validate_phone_number, 
validate_inquiry};