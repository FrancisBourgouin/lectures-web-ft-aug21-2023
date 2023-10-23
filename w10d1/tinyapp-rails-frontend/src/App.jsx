import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Url from "./Url";

function App() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    axios
      .get("/api/urls.json")
      .then((res) => res.data)
      .then(setUrls)
      .catch((err) => {
        console.log(err);
        setUrls(null);
      })
      .finally(() => {
        console.log("Yay!");
      });
  }, []);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Short URL</th>
            <th scope="col">Long URL</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(urls) && urls.map((url) => <Url key={url.id} {...url} />)}
        </tbody>
      </table>
    </>
  );
}

export default App;
