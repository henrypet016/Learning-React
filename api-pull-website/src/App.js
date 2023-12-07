import Axios from "axios";
import {useState} from "react";

function App() {
    const [articleTitle, setArticleTitle] = useState("");
    const [articleImpactStatement, setArticleImpactStatement] = useState("");
    Axios.get("https://api.elifesciences.org/articles/85398").then((res) => {
      setArticleTitle(res.data.title);
    })
    Axios.get("https://api.elifesciences.org/articles/85398").then((res) => {
      setArticleImpactStatement(res.data.impactStatement);
    })
  return (
    <div className="App">
      <button> Article 1 </button>
      <button> Article 2 </button>
      <button> Article 3 </button>
      <h1> {articleTitle} </h1>
      <p> {articleImpactStatement} </p>
    </div>
  );
}

export default App;