import React from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";
import { Button } from "reactstrap";
import { useRequestsContext } from "../../../../Utils/requests";

const index = () => {
  const useRequest = useRequestsContext();

  const router = useRouter();
  const { apiId } = router.query;

  const data = useRequest.getRequests("/api/APIManagement/GetAPIByID/" + apiId);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>API Title : {data.name}</div>
        <div className={styles.description}>{data.desc}</div>
        <div className={styles.description}>{data.price} Rs</div>
        <div class="d-flex flex-row justify-content-center">
          <div class={styles.card}>
            <p className="text-center">Hello this is data</p>
            <Button
              color="primary"
              onClick={() => {}}
              data-event={() => {}}
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
              onClick={() => {}}
              data-event={() => {}}
              style={{ marginBottom: "1rem" }}
            >
              {" "}
              Card 2
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
