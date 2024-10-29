import "../App.css";
import Head from "../components/Head";
import { useState, useEffect } from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import axios from "axios";

function App() {
  let [firstIcon, setIcon] = useState(true);
  let [myArray, setMyarray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setMyarray(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  function changeValue() {
    setIcon((prevValue) => !prevValue);
  }
  return (
    <div className="container">
      <Head
        image={firstIcon ? "sun.svg" : "moon.svg"}
        event={changeValue}
        backgroundChange={firstIcon}
      />
      <Main myStily={firstIcon} myData={myArray} />
      <Footer />
    </div>
  );
}

export default App;
