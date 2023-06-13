import { useState } from "react";
import { motion } from "framer-motion";
import { filterDialogAni } from "../../utils/motion.utils";
import { sources, categories } from "../../utils/article-utils";
import Checkbox from "../checkbox/checkbox-component";
import Date from "../date/date-component";
import Button from "../button/button-component";
import { BUTTON_TYPES } from "../../utils/button-types.utils";

const fields = {
  sources: [],
  categories: [],
  fromDate: "",
};
const Preferences = () => {
  const [formField, setFormField] = useState(fields);
  return (
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
              <Checkbox key={id} {...otherProps} />
            ))}
          </div>
          <div>
            <div className="text-md font-semibold leading-6 text-white">
              From Date
            </div>
            <Date name="from_date" />
          </div>
        </div>
        <div>
          <div className="text-md font-semibold leading-6 text-white">
            Preferred Categories
          </div>
          <div className="mt-6 space-y-2">
            {categories.map(({ id, ...otherProps }) => (
              <Checkbox key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </div>
      <div className=" rounded-md hover:border hover:border-white mt-4  ">
        <Button
          btnType={BUTTON_TYPES.WHITE}
          label="Submit"
          handleSubmit={() => console.log("submited")}
        />
      </div>
    </motion.div>
  );
};
export default Preferences;
