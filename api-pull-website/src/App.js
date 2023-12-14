import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [articleData, setArticleData] = useState({
    title: "",
    impactStatement: ""
  });

  useEffect(() => {
    Axios.get('https://api.elifesciences.org/articles/${articleNumber}')
      .then((res) => {
        setArticleData({
          title: res.data.title,
          impactStatement: res.data.impactStatement
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <button> Article 1 </button>
      <button> Article 2 </button>
      <button> Article 3 </button>
      <h1> {articleData.title} </h1>
      <p> {articleData.impactStatement} </p>
    </div>
  );
}

export default App;
