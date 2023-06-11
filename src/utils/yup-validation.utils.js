import * as Yup from "yup";

/** Sign in form validation and initial values */
export const signInFormInitialValues = {
  email: "",
  password: "",
};
export const signInFormValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
});
/** end */

/** Sign out form validation and initial values */
export const signOutFormInitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const signOutFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password must match!"
  ),
});
/** end */
