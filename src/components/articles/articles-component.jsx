import { useEffect, useState } from "react";
// import { getRequest } from "../../utils/api-utils";
import axios from "axios";
import Article from "../article/article-component";
const Articles = () => {
  const [articles, setArticles] = useState({});
  useEffect(() => {
    const getArticles = async () => {
      await axios
        .get(
          "https://content.guardianapis.com/search?api-key=9bcab1f3-c60b-48a4-bda7-2404d5b0ce93"
        )
        .then((response) => setArticles(response.data.response));
    };
    return getArticles;
  }, []);
  console.log(articles);
  return (
    <div className=" min-h-screen">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {articles &&
          articles?.results?.map(({ id, ...otherProps }) => (
            <Article key={id} {...otherProps} />
          ))}
      </ul>
    </div>
  );
};
export default Articles;
