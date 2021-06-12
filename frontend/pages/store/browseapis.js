import React from "react";
import styles from "../../styles/Home.module.css";
import { Input } from "reactstrap";
import { useUserContext } from "../../Source/UserManagement";
import Fuse from "fuse.js";
import axiosinstance from "../../Utils/axios/AxiosInstance";

const browseapis = () => {
  const [data, setData] = React.useState(null)
  const [query, setQuery] = React.useState(true)
  const [filteredData, setFilteredData] = React.useState(null)

  function getRequests(callUrl) {
    if (axiosinstance != null) {
      axiosinstance.get(callUrl).then(response => {
        if (response.status == 200) {
          setData(response.data)
          setFilteredData(data);
          setQuery(false)
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }

  if (query)
    getRequests("/api/APIManagement/GetAPIs");

  const userData = useUserContext();

  const searchitem = (query) => {
    if (!query) {
      setFilteredData(data);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "desc"], //add possible search keys here
    });

    const searchresults = fuse.search(query);

    if (searchresults.length) {
      var finalresults = [];
      searchresults.forEach((fyp) => {
        finalresults.push(fyp.item);
      });
      setFilteredData(finalresults);
    } else {
      setFilteredData([]);
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
          {filteredData && filteredData.map((item) => (
            <div className={styles.card}>
              <h3>{item.name}</h3>
              <p>{item.desc} </p>

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
