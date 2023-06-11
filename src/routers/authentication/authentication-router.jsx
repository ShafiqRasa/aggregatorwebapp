import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignOutForm from "../../components/sign-out-form/sign-out-form.component";

const Login = () => {
  return (
    <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 justify-center items-start">
      <SignInForm />
      <SignOutForm />
    </div>
  );
};

export default Login;
