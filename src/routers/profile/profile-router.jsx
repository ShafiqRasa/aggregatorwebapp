import UserProfile from "../../components/profile/profile-component";
import Setting from "../../components/setting/setting-component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { useEffect } from "react";

const Profile = () => {
  const { isLogin } = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogin && navigate("/", { replace: true });
  }, [isLogin]);

  return (
    <div className=" flex flex-col sm:flex-row flex-nowrap px-8">
      <div className=" flex-1">
        <UserProfile />
      </div>
      <div className=" flex-1">
        <Setting />
      </div>
    </div>
  );
};
export default Profile;
