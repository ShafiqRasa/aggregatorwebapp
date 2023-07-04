import { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { classNames } from "../../utils/joiner-class.utils";
import axios from "axios";
import Article from "../article/article-component";
import BounceLoader from "../bounc-loader/bounc-loader.component";
import { SearchContext } from "../../context/search-key.context";
import PageBar from "../page-bar/page-bar.component";
import { FunnelIcon } from "@heroicons/react/20/solid";
import FilterDialog from "../filter-dialog-box/filter-dialog-box.component";
import { useSelector } from "react-redux";
import { preferencesSelector } from "../../store/preferences/preferences-selector";
import { motion } from "framer-motion";
import { filterDialogAni } from "../../utils/motion.utils";
import { articleProps } from "../article/article-component";

const initialArticlesValue = {
  results: [
    {
      id: 0,
      webTitle: "",
      webPublicationDate: "",
      webUrl: "",
    },
  ],
  total: 0,
};
type resultType = articleProps & { id: number };
type articles = {
  results: resultType[];
  total: number;
};
const Articles = () => {
  const [articles, setArticles] = useState<articles>(initialArticlesValue);
  const [filterDialog, setFilterDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const { key } = useContext(SearchContext);
  const { fromDate, categories } = useSelector(preferencesSelector);

  const getArticles = async (url: string) => {
    setLoading(true);
    await axios
      .get(url)
      .then((response) => setArticles(response.data.response))
      .catch(({ code }) => console.log("error code:", code));
    setLoading(false);
  };
  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    const url = `${
      process.env.REACT_APP_GUARDIAN_API
    }page=${page}&q=${key}${filterByCategory()}&${
      fromDate && `from-date=${fromDate}`
    }`;
    getArticles(url);
  };

  useEffect(() => {
    const url = `${
      process.env.REACT_APP_GUARDIAN_API
    }page=1&&q=${key}${filterByCategory()}&${
      fromDate && `from-date=${fromDate}`
    }`;
    getArticles(url);
  }, [key, fromDate, categories]);

  const filterByCategory = () => {
    let categoryFilter = "";
    if (categories.length > 0) {
      categories.map((category) => {
        categoryFilter += `&q=${category}`;
      });
    } else {
      return "";
    }
    return categoryFilter;
  };

  return (
    <div className=" relative">
      <div className="w-full my-4 flex justify-between">
        <PageBar />
        {/* quick filter box */}
        <FunnelIcon
          onClick={() => setFilterDialog(!filterDialog)}
          className=" w-6 h-6 text-blue-500 hover:cursor-pointer"
        />
        {/* end */}
      </div>
      <div className=" min-h-[70vh] flex flex-col gap-y-8 justify-center items-center">
        <ul
          role="list"
          className={
            !loading
              ? classNames(
                  "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                )
              : ""
          }
        >
          {loading ? (
            <BounceLoader />
          ) : (
            articles &&
            articles?.results.map(({ id, ...otherProps }) => (
              <Article key={id} {...otherProps} />
            ))
          )}
        </ul>
        <div className="  my-10">
          {/* paginated UI comes from react-pagination library */}
          <ReactPaginate
            breakLabel="..."
            nextLabel={<span>next</span>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={articles.total}
            previousLabel={<span>back</span>}
            renderOnZeroPageCount={null}
            containerClassName=" flex justify-center my-4 items-center"
            pageClassName=""
            pageLinkClassName="border mx-1 p-2 rounded hover:shadow-lg"
            nextLinkClassName={
              !loading
                ? classNames("border p-2 border rounded hover:shadow-lg")
                : ""
            }
            previousLinkClassName={
              !loading
                ? classNames("border p-2 border rounded hover:shadow-lg")
                : ""
            }
            activeLinkClassName="bg-blue-600 text-white p-2"
            disabledClassName=" hover:bg-blue-gray-200 hover:opacity-50 hover:cursor-not-allowed"
            disabledLinkClassName="hover:cursor-not-allowed"
          />
          {/* end */}
        </div>
      </div>

      {filterDialog && (
        <motion.div
          {...filterDialogAni}
          className=" bg-black w-full sm:w-1/3 absolute top-10 right-0 rounded-md overflow-hidden shadow-lg "
        >
          <FilterDialog title="Quick Filter By" />
        </motion.div>
      )}
    </div>
  );
};
export default Articles;
