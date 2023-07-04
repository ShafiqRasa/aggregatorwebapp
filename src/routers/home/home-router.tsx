import { defaultCategories } from "../../utils/article-utils";
import CategoryCart from "../../components/cart/category-cart.component";

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
          {defaultCategories.map(({ id, ...otherProps }) => (
            <CategoryCart key={id} {...otherProps} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
