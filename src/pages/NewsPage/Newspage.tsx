import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Newspage.scss";

const Newspage = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=crypto&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      setData(response.data.articles.slice(0, 10));
    };
    getNews();
  }, []);
  return (
    <div className="articles">
      {!!data &&
        data
          .sort(function (a: any, b: any) {
            return (
              Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
            );
          })
          .map((item: any, index = 0) => (
            <article key={item.title} className="article-item">
              <img
                src={item.urlToImage}
                alt=""
                className="article-item__image"
              />
              <div className="article-item__content">
                <div className="title">
                  <h3>{item.source.name}</h3>
                  <div>{new Date(item.publishedAt).toDateString()}</div>
                </div>
                <div className="subtitle">
                  <Link to={`/news/${index}`}>{item.title}</Link>
                </div>
                <div className="description">{item.description}</div>
              </div>
            </article>
          ))}
    </div>
  );
};

export default Newspage;
