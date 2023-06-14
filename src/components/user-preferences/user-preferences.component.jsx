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
import { preferencesSelector } from "../../store/preferences/preferences-selector";
import {
  setSource,
  setCategory,
  setFromDate,
} from "../../store/preferences/preferences-slice";
import {
  addSrouce,
  addCategory,
} from "../../store/preferences/preferences-slice";

const Preferences = () => {
  const [alert, setAlert] = useState(alertMessage);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const { sources, categories, fromDate } = useSelector(preferencesSelector);

  const hanldeSources = (event) => {
    const newSrc = addSrouce(sources, event.target.value);
    dispatch(setSource(newSrc));
  };
  const hanldeCategories = (event) => {
    const newCat = addCategory(categories, event.target.value);
    dispatch(setCategory(newCat));
  };

  const handleFromDate = (event) => dispatch(setFromDate(event.target.value));
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
        <h1 className="text-lg font-semibold leading-6 text-white mb-4">
          Custome Setting
        </h1>
        <div className="flex flex-row flex-wrap flex-grow gap-y-4  justify-between items-start">
          <div className=" flex flex-col flex-wrap gap-y-4">
            <div>
              <div className="text-md font-semibold leading-6 text-white mb-2">
                Pereferred Sources
              </div>
              {defaultSources.map(({ id, ...otherProps }) => {
                const checked = sources.includes(otherProps.value);
                return (
                  <Checkbox
                    key={id}
                    {...otherProps}
                    handleCheckbox={hanldeSources}
                    checked={checked}
                  />
                );
              })}
            </div>
            <div>
              <div className="text-md font-semibold leading-6 text-white">
                From Date
              </div>
              <Date
                name="from_date"
                handleDate={handleFromDate}
                value={fromDate}
              />
            </div>
          </div>
          <div>
            <div className="text-md font-semibold leading-6 text-white">
              Preferred Categories
            </div>
            <div className="mt-6 space-y-2">
              {defaultCategories.map(({ id, ...otherProps }) => {
                const checked = categories.includes(otherProps.value);
                return (
                  <Checkbox
                    key={id}
                    {...otherProps}
                    handleCheckbox={hanldeCategories}
                    checked={checked}
                  />
                );
              })}
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
