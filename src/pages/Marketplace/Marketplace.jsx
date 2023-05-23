import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Transitions from "../../components/Transitions";
import { Context } from "../../Context";
import Products from "./Product";
import SideNav from "./SideNav";
import SkeletonLoader from "../../components/SkeletonLoader";

const ProductPage = () => {
  const { products } = useContext(Context);
  return (
    <Transitions>
      <section className="mx-16 mt-20 flex flex-row ">
        <div>
          <SideNav />
        </div>
        <main className="px-4 md:px-11 w-full">
          <article className="md:hidden text-[#BCB7B7] mb-4">
            <p className="text-lg font-medium leading-[51.5px] mb-4">
              <Link to="/">Home/</Link>{" "}
              <Link to="marketplace">Marketplace/</Link>{" "}
              <span className="text-grey">Editorials</span>
            </p>
            <p className="font-poppin">
              <i>See 1-6 of 15 results</i>
            </p>
          </article>
          <div className="w-full h-[3.75rem] text-black text-lg leading-[150%] rounded-[15px] shadow-5xl md:shadow-4xl border mb-8 flex items-center justify-between px-4">
            <p className="hidden md:block">See 1-6 of 15 results</p>
            <select
              name="filter-by"
              id="filter-by"
              className="md:hidden border-black md:border-[0.4px] p-2 rounded-lg focus:outline-0 bg-transparent"
            >
              <option value="">Filter</option>
            </select>
            <select
              name="sort-by"
              id="sort-by"
              className=" border-black md:border-[0.4px] p-2 md:px-8 rounded-lg focus:outline-0 bg-transparent"
            >
              <option value="">Sort By</option>
            </select>
          </div>

          {/* Check if the product array contain items, if yes display the product else display the skeleton loaders  */}
          {products.length ? <Products /> : <SkeletonLoader />}
        </main>
      </section>
    </Transitions>
  );
};

export default ProductPage;
