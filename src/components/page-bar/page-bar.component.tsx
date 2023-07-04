import { ChangeEvent, useEffect } from "react";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { SearchContext } from "../../context/search-key.context";

const PageBar = () => {
  const { setKey } = useContext(SearchContext);
  const queryParameters = new URLSearchParams(window.location.search);
  useEffect(() => {
    if (queryParameters.get("cat") != "") {
      setKey({
        target: { value: queryParameters.get("cat") as string },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [queryParameters.get("cat")]);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className=" flex items-start space-x-4">
        <li>
          <div>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
              Articles
            </a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a className="ml-4 text-sm normal-case  font-medium text-gray-500 hover:text-gray-700">
              {queryParameters.get("cat") ? queryParameters.get("cat") : "All"}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};
export default PageBar;
