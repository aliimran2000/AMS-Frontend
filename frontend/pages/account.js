import withAuth from "../Utils/withAuth";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import { UserDetails } from "../contexts/UserContext";

function account() {
  
 const UserTools = UserDetails();

    
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.main}>
        <Fade bottom>
          <div className={styles.container}>

            <h1 class="display-2">Hi , {UserTools.Getter().name} this page is under construction </h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default account;
