import { StarIcon } from "@heroicons/react/20/solid";
import { userSelector } from "../../store/user/user-selector";
import { useSelector } from "react-redux";
import { preferencesSelector } from "../../store/preferences/preferences-selector";

const UserProfile = () => {
  const { user } = useSelector(userSelector);
  const { categories, fromDate } = useSelector(preferencesSelector);
  const { name, email } = user.user;
  return (
    <div className="mx-auto">
      <div className=" h-20 border rounded-md bg-black flex justify-center gap-2 items-center "></div>
      <div className=" relative">
        <div className=" bg-white w-16 h-16 rounded-full border border-blue-600 z-50 absolute flex flex-col justify-center items-center  -bottom-8 right-0 left-0 mx-auto">
          <img
            className="h-10 w-10 rounded-full"
            src="/assets/icons/user.png"
            alt=""
          />
        </div>
      </div>
      <div className=" mt-10 flex flex-col justify-center items-center">
        <h2>{name}</h2>
        <p>{email}</p>
        <div className=" flex justify-center my-4">
          {[0, 1, 2, 3, 4].map((num) => (
            <StarIcon key={num} className="h-5 w-5 flex-shrink-0 text-black" />
          ))}
        </div>
        <p className="mb-4">Your Customized setting are as below:</p>
        <div className="w-full flex flex-col sm:flex-row justify-evenly items-center sm:items-start gap-6">
          <dl>
            <dt>Sources</dt>
            <dd>- Guardian API</dd>
            {/* shown the source of articles */}
            {/* {sources ? (
              sources?.map((ar) => <dd key={ar}>- {ar}</dd>)
            ) : (
              <dd>- All set by default</dd>
            )} */}
          </dl>
          {categories && (
            <dl>
              <dt>Categories</dt>
              {categories?.map((category, index) => (
                <dd key={index}>- {category}</dd>
              ))}
            </dl>
          )}
          <dl>
            <dt>From Date</dt>
            {fromDate && <dd>- {fromDate}</dd>}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
