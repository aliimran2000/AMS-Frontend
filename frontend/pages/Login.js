import Authorization from '../Utils/axios/auth'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { Fade, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSnackbar } from 'notistack';


function LoginPage() {
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();//prevent default action of form which is submit

        console.log("requesting")
        Authorization.login(state.email, state.password)
            .then(succeded => {
                if (succeded) {
                    enqueueSnackbar("Login SuccessFull", { variant: 'success',});
                    window.location.href = '/account';
                }
                else {  
                    enqueueSnackbar("Login Failed", { variant: 'error',});     
                }
            });
    }
   
    return (
        <div className={styles.container} >
            {process.browser && localStorage.getItem('token') ? window.location.href="/account" : null}
            <Fade in={true}>
                <Form className={styles.loginform}>

                    <h1 className="text-center">
                        <span className="font-weight-bolder text-success">HostYourAPI</span>.com
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
                        <a href="/Register">
                            Dont have an account?
                        </a>
                    </div>

                    <div className="text-center  pt-3">
                        <a href="/Register">
                            Forgot Password?
                        </a>
                    </div>

                </Form>
            </Fade>
        </div>
    )
}

export default LoginPage