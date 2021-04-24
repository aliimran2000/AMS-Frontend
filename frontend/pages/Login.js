import Authorization from '../Utils/axios/auth.ts'
import React, { useState } from 'react';




import styles from '../styles/Home.module.css'

import {Fade ,Button ,Form , FormGroup , Label , Input} from 'reactstrap';




function LoginPage(){
    

    const [state , setState] = useState({
      email : "",
      password : ""
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
      if (state.email != "" && state.password != ""){
        Authorization.login(state.email,state.password);
    
    }

  }

    return (
      <div className={styles.main}>
         <Fade in={true}>
         <Form className={styles.loginform}>
         
         
          <h1 className="text-center">
            <span className="font-weight-bold text-success">HostYourAPI</span>.com 
          </h1>
          <h3 className="text-center">
            The Solution to your API Needs 
          </h3>

          <FormGroup className="mt-4">
            <Label>
              Email
            </Label>
            <Input type="email" placeholder="user@email.com" id="email" onChange={handleChange} />
            <Label>
              Password
            </Label>
            <Input type="password" placeholder="Password" id="password" onChange={handleChange} />
          
          </FormGroup>
          
          <Button 
          className="btn-success btn-block" 
          onClick={handleSubmitClick}
          type="submit">
            Log In
          </Button> 
          
          
          <div className="text-center  pt-3">
            <a  href="/Registration">
              Dont have an account?
            </a> 
          </div>
          <div className="text-center  pt-3">
            <a  href="/Registration">
              Forgot Password?
            </a> 
          </div>


           
          </Form>
          </Fade>
          </div>
    )
  }
  
export default LoginPage