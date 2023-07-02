import { defaultCategories, defaultSources } from "../../utils/article-utils";
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
import { ChangeEvent } from "react";

const FilterDialog = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const { sources, categories, fromDate } = useSelector(preferencesSelector);
  const handleFromDate = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(setFromDate(event.target.value));
  const handleSource = (event: ChangeEvent<HTMLInputElement>) => {
    const addSrc = event.target.value;
    const newSrc = addSrouce(sources, addSrc);

    dispatch(setSource(newSrc));
  };
  const hanldeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const addCat = event.target.value;
    const newCat = addCategory(categories, addCat);
    dispatch(setCategory(newCat));
  };
  return (
    <div className="bg-black flex flex-row flex-wrap flex-grow gap-y-4  p-4 justify-between items-start">
      <div className=" flex flex-col flex-wrap gap-y-4">
        <h1 className="text-lg font-semibold leading-6 text-white mb-4">
          {title}
        </h1>
        <div>
          <div className="text-md font-semibold leading-6 text-white mb-2">
            Source
          </div>
          {defaultSources.map(({ id, ...otherProps }) => {
            // const checked = sources?.includes(otherProps.value);
            return (
              <Checkbox
                key={id}
                name="sources"
                {...otherProps}
                handleCheckbox={handleSource}
                checked={true}
              />
            );
          })}
        </div>
        <div>
          <div className="text-md font-semibold leading-6 text-white">date</div>
          <Date name="from_date" handleDate={handleFromDate} value={fromDate} />
        </div>
      </div>
      <div>
        <div className="text-md font-semibold leading-6 text-white">
          category
        </div>
        <div className="mt-6 space-y-2">
          {defaultCategories.map(({ id, ...otherProps }) => {
            const checked = categories?.includes(otherProps.value);
            return (
              <Checkbox
                key={id}
                name="categories"
                {...otherProps}
                handleCheckbox={hanldeCategory}
                checked={checked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FilterDialog;
