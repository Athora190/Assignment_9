import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {validate_first_name, validate_last_name, validate_email, validate_phone_number, validate_inquiry} from './Validation';
import Container from '@material-ui/core/Container';
import Hero from '../../components/Hero'
import Box from '@material-ui/core/Box'

          

class ContactForm extends React.Component {
    constructor(props){
    super(props);
    this.state = {  
        firstName: {
                     value: '',
		             error: '',},
        lastName:{
                     value: '',
		             error: '',}, 
        email:{
                     value: '',
		             error: '',}, 
        phone:{
                     value: '',
		             error: '',}, 
        inquiry:{
                     value: '',
                     error: '',},
                     
    };    
    };

   

    handleChange = event =>{
        this.setState(
        {[event.target.name]: {value: event.target.value,
            error: '' }
        });
        console.log(event.target.value)  
    };
          

        submitForm(event) {

            event.preventDefault();
	
	
	const first_name_error = validate_first_name(this.state.firstName.value);
	if(first_name_error){
	    this.setState({
		firstName: {
		    value: this.state.firstName.value,
		    error: first_name_error
		}
	    });
	}

	const last_name_error = validate_last_name(this.state.lastName.value);

	if(last_name_error){
	    this.setState({
		lastName: {
		    value: this.state.lastName.value,
		    error: last_name_error
		}
	    });
    }
    
    const email_error = validate_email(this.state.email.value);

	if(email_error){
	    this.setState({
		email: {
		    value: this.state.email.value,
		    error: email_error
		}
        });
        
    }


    
    const phone_number_error = validate_phone_number(this.state.phone.value);

	if(phone_number_error){
	    this.setState({
		phone: {
		    value: this.state.phone.value,
		    error: phone_number_error
		}
	    });
    }
    
    const inquiry_error = validate_inquiry(this.state.inquiry.value);

	if(inquiry_error){
	    this.setState({
		inquiry: {
		    value: this.state.inquiry.value,
		    error: inquiry_error
		}
	    });
	}

	if(first_name_error || last_name_error || email_error || phone_number_error || inquiry_error ){
	    // has at least 1 error
	    // so quit
	    return;
	}
	
	// all error checks have been passed and have been found valid
	// so proceed!


        alert("Your submission was successful")
        };


    
    render() { 


        const mystyle = {
            
            color: 'red',
            display: 'flex',
            textAlign: 'center'
          };
          
        return (  

    <Box>
    
    <Hero title="Contact Us" description="Please tell us how we can help you!" />
    <Container maxWidth="xs">
        <div style={{marginBottom:'20px'}}>
         <Grid container>
            <br/>
               
            <Grid item xs={12} >

            <Typography style={{marginLeft:'70px', color:'blue'}} variant="h3" component="h3" gutterBottom>
            Contact Us
            </Typography>
            <form onSubmit={(event) => {this.submitForm(event);}}>
                   
                <div style={mystyle}>

                <div style={{marginRight:'20px'}}>
                <TextField
                    
                    error ={this.state.firstName.error}
                    helperText={this.state.firstName.error}
                    name="firstName"
                    onChange = {this.handleChange}
                    type ="text" 
                    value ={this.state.firstName.value} 
                    id="standard-helperText"
                    label="First Name"
                
                    />
                    </div>

                    <div>
                
                    <TextField
                    error ={this.state.lastName.error}
                    helperText={this.state.lastName.error}
                    name="lastName"
                    onChange = {this.handleChange}
                    type ="text" 
                    value ={this.state.lastName.value} 
                    id="standard-helperText"
                    label="Last Name"
                    
                    />

                    </div>
                    </div>
                
            <div style={mystyle}>
                <div style={{marginRight:'20px'}}>
                    <TextField
                    fullWidth
                    error ={this.state.email.error}
                    helperText={this.state.email.error}
                    name="email"
                    onChange = {this.handleChange}
                    type ="text" 
                    value ={this.state.email.value} 
                    id="standard-helperText"
                    label="Email"
                   
                />
                </div>

                <div>

                <TextField
                    error ={this.state.phone.error}
                    helperText={this.state.phone.error}
                    name="phone"
                    onChange = {(e) =>{this.handleChange(e)}}
                    type ="number" 
                    value ={this.state.phone.value} 
                    id="standard-helperText"
                    label="Mobile Number" 
                                
                    />
                </div>
            </div>

                      <br />

                    <TextField
                    name="inquiry"
                    error ={this.state.inquiry.error}
                    helperText={this.state.inquiry.error}
                    value ={this.state.inquiry.value} 
                    onChange = {this.handleChange}
                    id="outlined-multiline-static"
                    label="How Can We Help You?"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    />
                 
            <br /> <br />
         
            {/* <button variant="contained" >reset</button> */}
           
        
            <Button style={{marginLeft:'140px'}} variant="contained" type="submit" onSubmit = {event =>this.submitForm()} color="primary">SUBMIT</Button>
                <br />
            </form>
            
            </Grid>
        </Grid>

        </div>
        </Container>
        </Box>


        );
    };

};
export default ContactForm;

