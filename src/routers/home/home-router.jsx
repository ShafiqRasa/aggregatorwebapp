import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "education", imgUrl: "education.jpg" },
  { id: 2, name: "immigration", imgUrl: "immigration.jpg" },
  { id: 3, name: "football", imgUrl: "football.jpg" },
  { id: 4, name: "politic", imgUrl: "politic.jpg" },
  { id: 5, name: "economey", imgUrl: "economey.jpg" },
];
const Home = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col gap-y-4 md:px-14">
      <h1 className=" font-bold text-[2rem] leading-[3rem]">
        Find your favorits here!
      </h1>
      <h2 className=" w-full lg:w-2/3 font-semibold text-[1rem] leading-[2rem]">
        At our article website, we believe in the power of words to inspire,
        inform, and empower. We invite you to embark on a captivating journey of
        discovery, where each article has the potential to ignite your curiosity
        and broaden your horizons. So, dive in, explore our vast collection, and
        unlock the boundless power of knowledge. Let the adventure begin!
      </h2>
      <div className=" w-full ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(({ id, name, imgUrl }) => (
            <Link
              to={`/articles?cat=${name}`}
              key={id}
              className="h-[16rem] md:flex-1 border relative group overflow-hidden"
            >
              <img
                src={`/assets/images/${imgUrl}`}
                className=" absolute w-full h-full group-hover:scale-110 group-hover:transition-all group-hover:duration-1000 hover:cursor-pointer group-hover:ease-in"
              />
              <div className=" w-full h-full  mx-auto flex justify-center items-center">
                <div className=" border uppercase border-black font-semibold text-black p-4 bg-white opacity-75">
                  {name}
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="md:flex-1 h-[12rem] border"></div>
          <div className="md:flex-1 h-[12rem] border"></div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
