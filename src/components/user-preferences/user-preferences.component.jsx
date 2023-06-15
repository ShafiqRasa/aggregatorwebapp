import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { filterDialogAni } from "../../utils/motion.utils";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import Alert from "../alert/alert-component";
import { alertMessage } from "../../utils/default-alert.utils";
import { postRequest } from "../../utils/api-utils";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import { preferencesSelector } from "../../store/preferences/preferences-selector";
import FilterDialog from "../filter-dialog-box/filter-dialog-box.component";

const Preferences = () => {
  const [alert, setAlert] = useState(alertMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useSelector(userSelector);
  const { sources, categories, fromDate } = useSelector(preferencesSelector);
  const handleDismis = () => setAlert(alertMessage);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const fields = {
      src: sources,
      cat: categories,
      fromDate,
    };
    const result = await postRequest("setting", fields, user.jwt);
    if (result) {
      setAlert({
        status: true,
        isAlert: true,
        message: "Successfully, custome preferences added!",
      });
    } else {
      setAlert({
        status: false,
        isAlert: true,
        message: "Something went wrong!",
      });
    }
    setIsSubmitting(false);
  };
  return (
    <Fragment>
      <motion.div
        {...filterDialogAni}
        className=" bg-black  rounded-md shadow-lg p-4"
      >
        <FilterDialog title="Custome Setting" />

        <div className=" rounded-md hover:border hover:border-white mt-4  ">
          <Button
            btnType={BUTTON_TYPES.WHITE}
            label="Submit"
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
          />
        </div>
      </motion.div>
      {alert.isAlert && (
        <div>
          <Alert
            status={alert.status}
            message={alert.message}
            handleDismis={handleDismis}
          />
        </div>
      )}
    </Fragment>
  );
};
export default Preferences;
