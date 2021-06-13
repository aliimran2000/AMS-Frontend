import React from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";
import { Button } from "reactstrap";
import axiosinstance from "../../../../Utils/axios/AxiosInstance";
import saaxiosinstance from "../../../../Utils/axios/SAAxiosInstance";
import { useUserContext } from "../../../../Source/UserManagement";
import { useSnackbar } from "notistack";

const index = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [data, setData] = React.useState(null);
  const [query, setQuery] = React.useState(true);
  const [response, setresponse] = React.useState("");
  const userData = useUserContext();

  const router = useRouter();
  const { apiId } = router.query;

  if (query && apiId) {
    if (axiosinstance != null) {
      axiosinstance
        .post("/api/APIManagement/GetAPIByID", { id: apiId })
        .then((response) => {
          if (response.status == 200) {
            setData(response.data);
            setQuery(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const SampleCall = () => {
    if (saaxiosinstance != null) {
      saaxiosinstance
        .get(data.sampleCall)
        .then((response) => {
          if (response.status == 200) {
            setresponse(JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          setresponse("unable to get succesfull response");
          console.log(error);
        });
    }
  };



  const BuyApi = ()=>{
    
    if (axiosinstance != null) {
      axiosinstance
        .post("/api/APIManagement/BuyApi", { id: apiId })
        .then((response) => {
          if (response.status == 200) {
            enqueueSnackbar("Transaction Successfull visit your profile to view the API Key", { variant: "success" })
          }
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar("Unable to make transaction make sure you have the approprioate funds for the transaction", { variant: "error" })
        });
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {data && (
          <div>
            <div className={styles.title}>{data.name}</div>
            <div className={styles.description}>{data.desc}</div>

            <div className="d-flex flex-row justify-content-center mt-5">
              <div className={styles.rcontainer}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">About</h4>
                    <p>
                      This is a sample placeholder description of what thisd api
                      is about . the api has fast response time and 24 Hour
                      service
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-space-around mt-3">
                  <div className={styles.card}>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Package 1</h4>

                        <p>Price : {data.price}</p>
                        {userData && (
                          <Button
                            color="success"
                            style={{ minWidth: 200, minHeight: 50 }}
                            onClick = {()=>{BuyApi()}}
                          >
                            Buy Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Package 2</h4>
                        <p>
                          This is a sample placeholder description of package 2
                          whihc is currently not available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Base URL</h4>

                    <a className="card-text text-center" href={data.url} target="_blank" >{data.url}</a>
                  </div>
                </div>

                <p className="text-align-right">Response</p>

                <p
                  className="border border-info overflow-auto "
                  style={{ maxHeight: 500, minHeight: 250 , marginTop:2 ,  marginBottom:6 }}
                >
                  {response}
                </p>

                <Button
                  color="primary"
                  onClick={() => {
                    userData ? SampleCall() : (window.location.href = "/Login");
                  }}
                  data-event={() => {}}
                  style={{ marginBottom: "1rem" }}
                >
                  {userData ? "Do A Sample Call" : "Login to Do a Sample Call"}
                </Button>

                {userData ? (
                  <Button
                    color="success"
                    onClick={() => {
                      navigator.clipboard.writeText(response);
                    }}
                    data-event={() => {}}
                    style={{ marginBottom: "1rem" }}
                  >
                    Copy Response to Clip Board
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
