import Authorization from '../Utils/axios/auth'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Fade, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSnackbar } from 'notistack';


function RegistrationComplete() {


   
    return (
        <div className={styles.container}>

          <Fade in={true}>
            <h1 className="text-center"><span className="font-weight-bolder text-success">HostYourAPI</span>.com </h1>
            <h3 className="text-center">The Solution to your API Needs</h3>
          
            <div className={styles.main}>
               <h1 className="display-2 text-success">Registration Successful</h1>
            </div>

            <div className={styles.description}  >
                Thankyou for choosing us as your API Partner
            </div>


            <ul className="nav justify-content-center mt-3">
                <li className="nav-item">
                    <a className="nav-link active" href="/Login">Login</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="/Home">Home</a>
                </li>
            </ul>
         
            <div className={styles.footer}/>

        
          </Fade>
        </div>
    )
}

export default RegistrationComplete