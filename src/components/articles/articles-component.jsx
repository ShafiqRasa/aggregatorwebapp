import { useEffect, useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { classNames } from "../../utils/joiner-class.utils";
// import { getRequest } from "../../utils/api-utils";
import axios from "axios";
import Article from "../article/article-component";
import BounceLoader from "../bounc-loader/bounc-loader.component";
import { SearchContext } from "../../context/search-key.context";
import PageBar from "../page-bar/page-bar.component";

const Articles = () => {
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);
  const { key } = useContext(SearchContext);

  const getArticles = async (page = 1, date = "") => {
    setLoading(true);
    await axios
      .get(
        `https://content.guardianapis.com/search?api-key=9bcab1f3-c60b-48a4-bda7-2404d5b0ce93&page=${page}&q=${key}&${
          date && "from-date=".date
        }`
      )
      .then((response) => setArticles(response.data.response));
    setLoading(false);
  };
  const handlePageClick = (event) => {
    getArticles(event.selected + 1);
  };
  useEffect(() => {
    getArticles(1);
  }, []);
  useEffect(() => {
    getArticles(1);
  }, [key]);

  return (
    <div className=" min-h-[70vh] flex flex-col gap-y-8 justify-center items-center">
      <div className="w-full">
        <PageBar />
      </div>
      <ul
        role="list"
        className={classNames(
          !loading &&
            "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {loading ? (
          <BounceLoader />
        ) : (
          articles &&
          articles?.results?.map(({ id, ...otherProps }) => (
            <Article key={id} {...otherProps} />
          ))
        )}
      </ul>
      <div className="  my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={articles.total}
          previousLabel="< back"
          renderOnZeroPageCount={null}
          containerClassName=" flex justify-center my-4 items-center"
          pageClassName=""
          pageLinkClassName="border mx-1 p-2 rounded hover:shadow-lg"
          nextLinkClassName="border p-2 border rounded hover:shadow-lg"
          previousLinkClassName="border p-2 border rounded hover:shadow-lg"
          activeLinkClassName="bg-blue-600 text-white p-2"
          disabledClassName=" hover:bg-blue-gray-200 hover:opacity-50 hover:cursor-not-allowed"
          disabledLinkClassName="hover:cursor-not-allowed"
        />
      </div>
    </div>
  );
};
export default Articles;
