import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.elifesciences.org/articles');
        const articleItems = response.data.items || [];
        const sortedArticles = articleItems.sort((a, b) => new Date(b.published) - new Date(a.published));
        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Articles (Newest First)</h1>
      <ol>
        {articles.map((article) => (
          <li key={article.id}>
          ID: {article.id}, Published: {article.published}
        </li>
        ))}
      </ol>
    </div>
  );
};

export default App;

