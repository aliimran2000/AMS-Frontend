import Head from "next/head";
import styles from "../styles/Home.module.css";
import buttonstyles from "../styles/button.module.css";
import Image from "next/image";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.entrycontainer}></div>

      <div className={styles.main}>
        <Fade bottom>
          
          <div className={styles.rcontainer}>
            <h1 className="display-1">Welcome</h1>
          </div>

          <div
            className="d-flex justify-content-around"
            style={{ minWidth: "350px" }}
          >
            
            <Button
              onClick={() => {
                window.location.href = "/store/browseapis";
              }}
              className={buttonstyles.fancybuttonstretch}
            >
              continue to store
            </Button>

            
            <Button
              onClick={() => {
                window.location.href = "/About";
              }}
              className={buttonstyles.fancybutton}
            >
              Learn More
            </Button>

          </div>
        </Fade>

        <Fade>
          <Image
            src="/../public/media/down-arrow.png"
            height="100%"
            width="100%"
            top
            style={{ marginTop: "50px" }}
          />
        </Fade>

        <Fade left>
          <div className={styles.container}>
            <p className="display-4 ">Product for all your solutions</p>
            <Image
              src="/../public/media/gear-pen.png"
              height="200%"
              width="200%"
            ></Image>
          </div>
        </Fade>

        <Fade left>
          <div className={styles.container}>
            <p className="display-4  ">Controlled Access</p>
            <Image
              src="/../public/media/trihand.png"
              height="200%"
              width="200%"
            ></Image>
          </div>
        </Fade>

        <Fade left>
          <div className={styles.container}>
            <p className="display-4">Browse through Multiple Categories</p>

            <Image
              src="/../public/media/search.png"
              height="150%"
              width="150%"
            ></Image>
          </div>
        </Fade>
      </div>
    </div>
  );
}
