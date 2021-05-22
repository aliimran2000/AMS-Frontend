import withAuth from "../Utils/withAuth";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Collapse,
  Button,
  CardHeader,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

function account() {
  function Logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  const apis = [1, 2, 3, 4, 5];
  const [collapse, setCollapse] = useState(0);

  function toggle(e) {
    const id = Number(e.target.dataset.event);
    if (collapse === id) {
      setCollapse(0);
    } else {
      setCollapse(id);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className={styles.main}>
        <Fade bottom>
          <div className={styles.container}>
            <div className="d-flex flex-row justify-content-center">
              <div>
                <Card className={styles.card}>
                  <CardImg
                    top
                    width="100%"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.g9JQBsgn1JtJ4WirA1--IQHaHa%26pid%3DApi&f=1"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Profile</CardTitle>
                    <CardText>Name : Noman Aziz </CardText>
                    <CardText>Email : i181561@nu.edu.pk </CardText>
                    <CardText>Type : Admin </CardText>
                  </CardBody>
                </Card>
              </div>

              <div class="d-flex flex-column justify-content-center">
                {apis.map((index) => {
                  return (
                    <div>
                      <Button
                        color="primary"
                        onClick={toggle}
                        data-event={index}
                        style={{ marginBottom: "1rem" }}
                      >
                        Api : {index}
                      </Button>
                      <Collapse isOpen={collapse === index}>
                        <Card>
                          <CardBody>
                            <CardTitle tag="h5">Date</CardTitle>
                            <CardText>Rented : 01-01-2021</CardText>
                            <CardText>Expire : 01-02-2021</CardText>
                            <CardTitle tag="h5">Details</CardTitle>
                            <CardText>Name : Food Panda API Key</CardText>
                            <CardText>
                              Description : Used to order food via api
                            </CardText>
                          </CardBody>
                        </Card>
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                Logout();
              }}
            >
              Logout
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default account;
