import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [articleData, setArticleData] = useState({
    title: "",
    impactStatement: ""
  });

  const fetchArticleData = (articleNumber) => {
    Axios.get(`https://api.elifesciences.org/articles/${articleNumber}`)
      .then((res) => {
        setArticleData({
          title: res.data.title,
          impactStatement: res.data.impactStatement
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchArticleData("85398");
  }, []);

  return (
    <div className="App">
      <button onClick={() => fetchArticleData("85398")}> Article 1 </button>
      <button onClick={() => fetchArticleData("86903")}> Article 2 </button>
      <button onClick={() => fetchArticleData("93161")}> Article 3 </button>
      <h1> {articleData.title} </h1>
      <p> {articleData.impactStatement} </p>
    </div>
  );
}

export default App;