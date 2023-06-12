import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation-component";
import ArticlesRoute from "./routers/articles/articles-router";
import Home from "./routers/home/home-router";
import Login from "./routers/authentication/authentication-router";
import NotFound from "./routers/page-not-router/page-not-found.router";
import Profile from "./routers/profile/profile-router";

function App() {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="articles/*" element={<ArticlesRoute />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
