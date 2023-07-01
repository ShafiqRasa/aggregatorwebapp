import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation-component";
import ArticlesRoute from "./routers/articles/articles-router";
import Home from "./routers/home/home-router";
import Login from "./routers/authentication/authentication-router";
import NotFound from "./routers/page-not-router/page-not-found.router";
import Profile from "./routers/profile/profile-router";
import { setAll } from "./store/preferences/preferences-slice";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "./utils/api-utils";
import { userSelector } from "./store/user/user-selector";
import { preferencesSelector } from "./store/preferences/preferences-selector";

function App() {
  const { user, isLogin } = useSelector(userSelector);
  const {} = useSelector(preferencesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPreferences = async () => {
      const { jwt } = user;
      const sett = await getRequest("preferences", jwt);

      if (sett) {
        const { categories, fromDate } = sett.data;
        dispatch(setAll({ categories, fromDate }));
      }
    };
    isLogin && getPreferences();
  }, [isLogin]);

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
