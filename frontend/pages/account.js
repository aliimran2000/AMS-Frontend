import withAuth from "../Utils/withAuth";
import styles from "../styles/Home.module.css";
import Fade from "react-reveal/Fade";


function account() {
  

  function Logout(){
    localStorage.clear();
    window.location.href="/";
  }

    
  return (
    <div className="d-flex justify-content-center">
      <div className={styles.main}>
        <Fade bottom>
          <div className={styles.container}>


            <h1 class="display-2">Hi ,this page is under construction </h1>
            <button type="button" class="btn btn-outline-warning" onClick={()=>{Logout()}}>Logout</button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default account;
