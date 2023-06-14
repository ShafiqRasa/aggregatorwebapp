import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { filterDialogAni } from "../../utils/motion.utils";
import { defaultSources, defaultCategories } from "../../utils/article-utils";
import Checkbox from "../checkbox/checkbox-component";
import Date from "../date/date-component";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import Alert from "../alert/alert-component";
import { alertMessage } from "../../utils/default-alert.utils";
import { postRequest } from "../../utils/api-utils";
import { useSelector, useDispatch } from "react-redux";
import { userSelector } from "../../store/user/user-selector";
import {
  addSrouce,
  addCategory,
  setAll,
} from "../../store/preferences/preferences-slice";

const Preferences = () => {
  const [alert, setAlert] = useState(alertMessage);
  const [src, setSrc] = useState([]);
  const [cat, setCat] = useState([]);
  const [fDate, setFromDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);

  const hanldeSources = (event) => setSrc(addSrouce(src, event.target.value));
  const hanldeCategories = (event) =>
    setCat(addCategory(cat, event.target.value));
  const handleFromDate = (event) => setFromDate(event.target.value);
  const handleDismis = () => setAlert(alertMessage);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const fields = {
      src,
      cat,
      fromDate: fDate,
    };
    console.log(user.jwt);
    const result = await postRequest("setting", fields, user.jwt);
    if (result) {
      dispatch(
        setAll({
          sources: src,
          categories: cat,
          fromDate: fDate,
        })
      );
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
        <h1 className="text-lg font-semibold leading-6 text-white mb-4">
          Custome Setting
        </h1>
        <div className="flex flex-row flex-wrap flex-grow gap-y-4  justify-between items-start">
          <div className=" flex flex-col flex-wrap gap-y-4">
            <div>
              <div className="text-md font-semibold leading-6 text-white mb-2">
                Pereferred Sources
              </div>
              {defaultSources.map(({ id, ...otherProps }) => (
                <Checkbox
                  key={id}
                  {...otherProps}
                  handleCheckbox={hanldeSources}
                />
              ))}
            </div>
            <div>
              <div className="text-md font-semibold leading-6 text-white">
                From Date
              </div>
              <Date name="from_date" handleDate={handleFromDate} />
            </div>
          </div>
          <div>
            <div className="text-md font-semibold leading-6 text-white">
              Preferred Categories
            </div>
            <div className="mt-6 space-y-2">
              {defaultCategories.map(({ id, ...otherProps }) => (
                <Checkbox
                  key={id}
                  {...otherProps}
                  handleCheckbox={hanldeCategories}
                />
              ))}
            </div>
          </div>
        </div>
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
