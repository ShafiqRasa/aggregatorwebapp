import { format } from "date-fns";
import { Link } from "react-router-dom";

const Article = ({ webTitle, webPublicationDate, webUrl }) => {
  var date = new Date(webPublicationDate);
  return (
    <Link
      to={webUrl}
      target="_blank"
      className=" hover:border hover:border-blue-700 hover:scale-95 hover:transition-all duration-100 ease-in hover:cursor-pointer col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-start shadow"
    >
      <div className="flex flex-1 flex-col p-8">
        {/* <img
          className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt=""
        /> */}
        <dl className="mt-1 flex flex-grow flex-col justify-start items-start">
          <dd className="text-sm font-semibold text-gray-900">{webTitle}</dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <p className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm  text-gray-500">
              Published at
            </p>
            <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm  text-gray-500">
              {format(date, "MMMM do, yyyy")}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Article;
