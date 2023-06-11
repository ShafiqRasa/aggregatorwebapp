import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation-component";
import ArticlesRoute from "./routers/articles/articles-router";
import Home from "./routers/home/home-router";
import Login from "./routers/authentication/authentication-router";

function App() {
  return (
    // <div>
    //   <Navigation />
    // </div>
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="articles/*" element={<ArticlesRoute />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
