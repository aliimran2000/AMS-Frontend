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
import React, { useState } from "react";
import data from "../Utils/my-services.json";

import { useUserContext } from "../Source/UserManagement";
import axiosinstance from "../Utils/axios/AxiosInstance";

function account() {
  const [myapis, setmyapis] = React.useState(null);

  const userData = useUserContext();
  function Logout() {
    localStorage.clear();
    window.location.href = "/";
  }
  const apis = data;
  const [collapse, setCollapse] = useState("");

  const GetMyApis = () => {
    if (axiosinstance != null) {
      axiosinstance
        .get("/api/APIManagement/GetBoughtAPIs")
        .then((response) => {
          if (response.status == 200) {
            setmyapis(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getsnamefromID = (ID) => {
    if (axiosinstance != null) {
      axiosinstance
        .post("/api/APIManagement/GetAPIByID", { id: ID })
        .then((response) => {
          if (response.status == 200) {
            return response.data.name;
          }
        })
        .catch((error) => {
          return "placeholder";
        });
    }
  };

  function toggle(e) {
    const id = String(e.target.dataset.event);
    if (collapse === id) {
      setCollapse("");
    } else {
      setCollapse(id);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      {myapis ? null : GetMyApis()}
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
                    <CardText>
                      Name : {userData ? userData.username : "Loading..."}{" "}
                    </CardText>
                    <CardText>
                      Current Balance :{" "}
                      {userData ? userData.walletBalance : "Loading..."} points{" "}
                    </CardText>
                  </CardBody>
                </Card>
              </div>

              <div className="d-flex flex-column justify-content-center">
                {myapis &&
                  myapis.map((item) => {
                    return (
                      <div>
                        <Button
                          color={item.isExpired ? "danger" : "primary"}
                          onClick={toggle}
                          data-event={item.apiID}
                          style={{ marginBottom: "1rem" }}
                        >
                          Api : {item.api.name}
                        </Button>
                        <Collapse isOpen={collapse === item.apiID}>
                          <Card>
                            <CardBody>
                              <CardTitle tag="h5">Date</CardTitle>
                              <CardText>Brought : {item.boughtOn}</CardText>
                              <CardText>Expire : {item.expiresOn}</CardText>
                              <CardTitle tag="h5">Details</CardTitle>
                              <CardText>API-KEY : {item.apiID}</CardText>
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
