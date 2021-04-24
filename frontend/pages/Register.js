import Authorization from '../Utils/axios/auth.ts'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import {Fade ,Button ,Form , FormGroup , Label , Input} from 'reactstrap';


function RegistrationPage(){
    

    const [state , setState] = useState({
      username: "",
      email : "",
      password : "",
      passwordr : "",
    })
   

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }


    const handleSubmitClick = (e) => {
      e.preventDefault();//prevent default action of form which is submit
      
      console.log("requesting")
      Authorization.register(state.username,state.email,state.password);
    
    }

    return (
      <div className={styles.main}>
         <Fade in={true}>
         <Form className={styles.loginform}>
         
         
          <h1 className="text-center">
            <span className="font-weight-bolder text-success">HostYourAPI</span>.com 
          </h1>
          <h3 className="text-center">
            The Solution to your API Needs 
          </h3>


          <h3 className="text-center text-primary text-monospace mt-4">
            Register Here
          </h3>

          <FormGroup className="mt-4">  
            
            <Label>
              Email
            </Label>
            <Input className="mb-3" type="email" placeholder="user@email.com" id="email" onChange={handleChange} />
            
            <Label>
              UserName
            </Label>
            <Input  className="mb-3" placeholder="KingCoder123 etc." id="username" onChange={handleChange} />
            
            <Label>Password</Label>
            <Input className="mb-3" type="password" placeholder="Password" id="password" onChange={handleChange} />
            
            <Label>Confirm Password</Label>
            <Input className="mb-3" type="password" placeholder="Password" id="passwordr" onChange={handleChange} />
            
          
          </FormGroup>
          
          <Button 
          className="btn-success btn-block" 
          onClick={handleSubmitClick}
          type="submit">
            Register 
          </Button> 
          
          
          


           
          </Form>
          </Fade>
          </div>
    )
  }
  
export default RegistrationPage