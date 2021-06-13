import axios from "axios";

let SAaxiosinstance = null;

if (process.browser && SAaxiosinstance == null) {
  console.log("Created Axios Instance")
  SAaxiosinstance = axios.create({
    timeout: 1000
  });
}

export default SAaxiosinstance;
