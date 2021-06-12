import React from "react";
import styles from "../../styles/Home.module.css";
import { Input } from "reactstrap";
//import data from "../../Utils/mock-apis.json";
import { useUserContext } from "../../Source/UserManagement";
import Fuse from "fuse.js";
import { useRequestsContext } from "../../Utils/requests";

const browseapis = () => {
  //Get data from request
  const useRequest = useRequestsContext();
  const data = useRequest.getRequests("/api/APIManagement/GetAPIs");

  const [query, setquery] = React.useState(data);
  const userData = useUserContext();

  const searchitem = (query) => {
    if (!query) {
      setquery(data);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name"], //add possible search keys here
    });

    const searchresults = fuse.search(query);

    if (searchresults.length) {
      var finalresults = [];
      searchresults.forEach((fyp) => {
        finalresults.push(fyp.item);
      });
      setquery(finalresults);
    } else {
      setquery([]);
    }
  };

  return (
    <div className={styles.main}>
      <div className="container mt-2 mb-2">
        <Input
          placeholder="Search"
          size="lg"
          onChange={(e) => searchitem(e.target.value)}
        />
      </div>

      <div className={styles.container}>
        <div className="d-flex flex-wrap justify-content-center">
          {query.map((item) => (
            <div className={styles.card}>
              <h3>{item.name}</h3>
              <p>{item.desc} </p>
              <p>{item.price} Rs.</p>

              <div className="d-flex flex-column">
                {userData ? (
                  <button type="button" class="btn btn-success mb-1">
                    Buy Now
                  </button>
                ) : null}
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => {
                    window.location.href = "/store/viewapi/" + item.id;
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default browseapis;
