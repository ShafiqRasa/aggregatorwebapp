import { useContext } from "react";
import { motion } from "framer-motion";
import { categories, sources } from "../../utils/article-utils";
import { filterDialogAni } from "../../utils/motion.utils";
import Checkbox from "../checkbox/checkbox-component";
import Date from "../date/date-component";
import { SearchContext } from "../../context/search-key.context";

const FilterDialog = ({ filterDialog }) => {
  const { setSources, setCategories, setFromDate } = useContext(SearchContext);

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
            {sources.map(({ id, ...otherProps }) => (
              <Checkbox key={id} {...otherProps} handleCheckbox={setSources} />
            ))}
          </div>
          <div>
            <div className="text-lg font-semibold leading-6 text-white">
              Filter by date
            </div>
            <Date name="from_date" handleDate={setFromDate} />
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold leading-6 text-white">
            Filter by category
          </div>
          <div className="mt-6 space-y-2">
            {categories.map(({ id, ...otherProps }) => (
              <Checkbox
                key={id}
                {...otherProps}
                handleCheckbox={setCategories}
              />
            ))}
          </div>
        </div>
      </motion.div>
    )
  );
};
export default FilterDialog;
