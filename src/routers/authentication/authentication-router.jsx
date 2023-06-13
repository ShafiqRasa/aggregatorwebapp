import { useEffect } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLogin } = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    isLogin && navigate("/", { replace: true });
  }, [isLogin]);

  return (
    <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 justify-center items-start min-h-screen">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Login;
