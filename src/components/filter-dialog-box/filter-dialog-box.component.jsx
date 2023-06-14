import { motion } from "framer-motion";
import { defaultCategories, defaultSources } from "../../utils/article-utils";
import { filterDialogAni } from "../../utils/motion.utils";
import Checkbox from "../checkbox/checkbox-component";
import Date from "../date/date-component";
import {
  setFromDate,
  addSrouce,
  setSource,
  setCategory,
  addCategory,
} from "../../store/preferences/preferences-slice";
import { useDispatch, useSelector } from "react-redux";
import { preferencesSelector } from "../../store/preferences/preferences-selector";

const FilterDialog = ({ filterDialog }) => {
  const dispatch = useDispatch();
  const { sources, categories, fromDate } = useSelector(preferencesSelector);
  const data = useSelector(preferencesSelector);
  const handleFromDate = (event) => dispatch(setFromDate(event.target.value));
  const handleSource = (event) => {
    const addSrc = event.target.value;
    const newSrc = addSrouce(sources, addSrc);

    dispatch(setSource(newSrc));
  };
  const hanldeCategory = (event) => {
    const addCat = event.target.value;
    const newCat = addCategory(categories, addCat);
    dispatch(setCategory(newCat));
  };
  return (
    filterDialog && (
      <motion.div
        {...filterDialogAni}
        className=" bg-black w-full sm:w-1/3 absolute top-10 right-0 rounded-md shadow-lg flex flex-row flex-wrap flex-grow gap-y-4  p-4 justify-between items-start"
      >
        <div className=" flex flex-col flex-wrap gap-y-4">
          <div>
            <div className="text-lg font-semibold leading-6 text-white mb-2">
              Filter by Source
            </div>
            {defaultSources.map(({ id, ...otherProps }) => {
              const checked = sources?.includes(otherProps.value);
              return (
                <Checkbox
                  key={id}
                  {...otherProps}
                  handleCheckbox={handleSource}
                  checked={checked}
                />
              );
            })}
          </div>
          <div>
            <div className="text-lg font-semibold leading-6 text-white">
              Filter by date
            </div>
            <Date
              name="from_date"
              handleDate={handleFromDate}
              value={fromDate}
            />
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold leading-6 text-white">
            Filter by category
          </div>
          <div className="mt-6 space-y-2">
            {defaultCategories.map(({ id, ...otherProps }) => {
              const checked = categories?.includes(otherProps.value);
              return (
                <Checkbox
                  key={id}
                  {...otherProps}
                  handleCheckbox={hanldeCategory}
                  checked={checked}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    )
  );
};
export default FilterDialog;
