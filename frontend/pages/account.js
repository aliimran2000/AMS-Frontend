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
import { useUser } from "../Utils/UserManagement";
import data from "../Utils/my-services.json"

function account() {
  function Logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  const apis = data;
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
                    <CardText>Name : {useUser().name} </CardText>
                    <CardText>Email : {"IN DEV"} </CardText>
                    <CardText>Type : {"IN DEV"} </CardText>
                    <CardText>Current Balance : {useUser().balance} points </CardText>
                  </CardBody>
                </Card>
              </div>

              <div class="d-flex flex-column justify-content-center">
                {apis.map((item) => {
                  return (
                    <div>
                      <Button
                        color="primary"
                        onClick={toggle}
                        data-event={item.key}
                        style={{ marginBottom: "1rem" }}
                      >
                        Api : {item.key}
                      </Button>
                      <Collapse isOpen={collapse === item.key}>
                        <Card>
                          <CardBody>
                            <CardTitle tag="h5">Date</CardTitle>
                            <CardText>Rented : {item.rentaldate}</CardText>
                            <CardText>Expire : {item.expiredate}</CardText>
                            <CardTitle tag="h5">Details</CardTitle>
                            <CardText>Name : {item.name}</CardText>
                            <CardText>
                              Description : {item.description}
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

export default withAuth(account);
