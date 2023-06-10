import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation-component";
import ArticlesRoute from "./routers/articles/articles-router";
import Home from "./routers/home/home-router";

function App() {
  return (
    // <div>
    //   <Navigation />
    // </div>
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="articles/*" element={<ArticlesRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
