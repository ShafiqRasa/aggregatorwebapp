import { Link } from "react-router-dom";
const CategoryCart = ({ label, imgUrl }) => {
  return (
    <Link
      to={`/articles?cat=${label}`}
      className="h-[16rem] md:flex-1 border relative group overflow-hidden"
    >
      <img
        src={`/assets/images/${imgUrl}`}
        className=" absolute w-full h-full group-hover:scale-110 group-hover:transition-all group-hover:duration-1000 hover:cursor-pointer group-hover:ease-in"
      />
      <div className=" w-full h-full  mx-auto flex justify-center items-center">
        <div className=" border uppercase border-black font-semibold text-black p-4 bg-white opacity-75">
          {label}
        </div>
      </div>
    </Link>
  );
};
export default CategoryCart;
