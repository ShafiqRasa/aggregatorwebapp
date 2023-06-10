import { Routes, Route } from "react-router-dom";
import Articles from "../../components/articles/articles-component";
import Article from "../../components/article/article-component";

const ArticlesRout = () => {
  return (
    <Routes>
      <Route index element={<Articles />} />
      <Route path=":id" element={<Article />} />
    </Routes>
  );
};

export default ArticlesRout;
