import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { filterDialogAni } from "../../utils/motion.utils";
import { sources, categories } from "../../utils/article-utils";
import Checkbox from "../checkbox/checkbox-component";
import Date from "../date/date-component";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";
import { addSrouce } from "../../context/search-key.context";
import { addCategory } from "../../context/search-key.context";
import Alert from "../alert/alert-component";
import { alertMessage } from "../../utils/default-alert.utils";
import { postRequest } from "../../utils/api-utils";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/user/user-selector";

const Preferences = () => {
  const [alert, setAlert] = useState(alertMessage);
  const [src, setSrc] = useState([]);
  const [cat, setCat] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const { user } = useSelector(userSelector);

  const hanldeSources = (event) => setSrc(addSrouce(src, event.target.value));
  const hanldeCategories = (event) =>
    setCat(addCategory(cat, event.target.value));
  const handleFromDate = (event) => setFromDate(event.target.value);
  const handleDismis = () => setAlert(alertMessage);

  const handleSubmit = async () => {
    const fields = {
      src,
      cat,
      fromDate,
    };
    const url = "http://localhost:8000/setting";
    console.log(user.jwt);
    const result = await postRequest(url, fields, user.jwt);
    console.log("custome setting response ", result);
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
              {sources.map(({ id, ...otherProps }) => (
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
              {categories.map(({ id, ...otherProps }) => (
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
