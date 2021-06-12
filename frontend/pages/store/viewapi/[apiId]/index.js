import React from "react";
import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";
import { Button } from "reactstrap";

const index = () => {
  const router = useRouter();
  const { apiId } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>API Title : {apiId}</div>
        <div className={styles.description}>Random Value</div>
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
