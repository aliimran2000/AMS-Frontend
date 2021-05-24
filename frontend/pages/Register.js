import Authorization from "../Utils/axios/auth";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Fade, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useSnackbar } from "notistack";
import Image from "next/image";


function RegistrationPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordr: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault(); //prevent default action of form which is submit

    if (state.password != state.passwordr) {
      enqueueSnackbar("Passwords don't     Match", {
        variant: "warning",

        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });

      return;
    }

    Authorization.register(state.username, state.email, state.password).then(
      (succeded) => {
        if (succeded[0]) {
          enqueueSnackbar("Registration SuccessFull", { variant: "success" });
          window.location.href = "/Registration-Complete";
        } else {
          enqueueSnackbar(succeded[1], { variant: "error" });
        }
      }
    );
  };

  return (
    <div className={styles.container}>
      <Fade in={true}>
        <div class="d-flex justify-content-center mb-2">
          <Image
            src="/../public/media/stock-exchange-app.png"
            height="100%"
            width="100%"
          />
        </div>
        <Form className={styles.loginform}>
          <h1 className="text-center">
            <span className="font-weight-bolder text-success">HostYourAPI</span>
            .com
          </h1>
          <h3 className="text-center">The Solution to your API Needs</h3>

          <h3 className="text-center text-primary text-monospace mt-4">
            Register Here
          </h3>
          <FormGroup className="mt-4">
            <Label>Email</Label>
            <Input
              name="email"
              required={true}
              className="mb-3"
              type="email"
              placeholder="user@email.com"
              id="email"
              onChange={handleChange}
            />

            <Label>UserName</Label>
            <Input
              name="usernmae"
              required={true}
              className="mb-3"
              placeholder="KingCoder123 etc."
              id="username"
              onChange={handleChange}
            />

            <Label>Password</Label>
            <Input
              name="password"
              required={true}
              className="mb-3"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />

            <Label>Confirm Password</Label>
            <Input
              name="password"
              required={true}
              className="mb-3"
              type="password"
              placeholder="Password"
              id="passwordr"
              onChange={handleChange}
            />
          </FormGroup>

          {!(
            state.username &&
            state.email &&
            state.password &&
            state.passwordr
          ) ? (
            <Button className="disabled btn-secondary btn-block" type="submit">
              Register
            </Button>
          ) : (
            <Button
              className="btn-success btn-block"
              onClick={handleSubmitClick}
              type="submit"
            >
              Register
            </Button>
          )}
        </Form>
      </Fade>
    </div>
  );
}

export default RegistrationPage;
