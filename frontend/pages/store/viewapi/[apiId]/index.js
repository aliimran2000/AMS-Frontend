import React from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";
import { Button } from "reactstrap";
import axiosinstance from "../../../../Utils/axios/AxiosInstance";
import { route } from "next/dist/next-server/server/router";

const index = () => {

  const [data, setData] = React.useState(null)
  const [query, setQuery] = React.useState(true)


  const router = useRouter();
  const { apiId } = router.query;

  if (query && apiId) {
    if (axiosinstance != null) {
      axiosinstance.post("/api/APIManagement/GetAPIByID", { id: apiId }).then(response => {
        if (response.status == 200) {
          setData(response.data)
          setQuery(false)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {data &&
          <div>
            <div className={styles.title}>API Title : {data.name}</div>
            <div className={styles.description}>{data.desc}</div>
            <div class="d-flex flex-row justify-content-center">
              <div class={styles.card}>
                <p className="text-center">Hello this is data</p>
                <Button
                  color="primary"
                  onClick={() => { }}
                  data-event={() => { }}
                  style={{ marginBottom: "1rem" }}
                >
                  {" "}
                  Card 1
                </Button>
              </div>
              <div class={styles.card}>
                {" "}
                <p className="text-center">Hello this is data</p>
                <Button
                  color="primary"
                  onClick={() => { }}
                  data-event={() => { }}
                  style={{ marginBottom: "1rem" }}
                >
                  {" "}
                  Card 2
                </Button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default index;
