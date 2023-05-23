import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSliderAlt } from "react-icons/bi";
import MultiRangeSlider from "../../components/MultiRangeSlider/MultiRangeSlider";
import { CatTitle, CheckBox } from "./CartTitle";

const SideNav = () => {
  const [value, setValue] = useState({ min: 0, max: 100 });
  return (
    <aside className="w-[244px] shrink-0 hidden lg:block">
      <div className="bg-gray-400  rounded-lg flex flex-row items-center justify-center py-3  gap-2 ">
        <div className="text-gray-800 text-2xl">
          <AiOutlineSearch />
        </div>
        <input
          type="search"
          name=""
          id=""
          className="py-2 px-2 focus:outline-none bg-gray-200 text-black"
          placeholder="Search.."
        />
      </div>
      <div>
        <div className="flex flex-1 flex-row itens-center gap-2 mt-10 mb-3">
          <BiSliderAlt className="text-4xl" />
          <h1 className="text-2xl font-semibold">Filter</h1>
        </div>
        <div className="w-fill h-1.5 rounded-full bg-[#AFB091]"></div>
      </div>

      <div className="mb-8 mt-10">
        <CatTitle title="By Category" />
        <div className="transition-all overflow-hidden">
          <CheckBox id="editorial" title="Editorial" />
          <CheckBox id="fashion" title="Fashion" />
          <CheckBox id="optics" title="Optics" />
          <CheckBox id="art-meseuum" title="Art & Museum" />
          <CheckBox id="nature" title="Nature" />
        </div>
      </div>

      <div className="mb-8">
        <CatTitle title="By Price" />
        <div className="transition-all overflow-hidden">
          <p className="my-4 mb-8 text-xl text-grey">
            ${value.min.toFixed(2)} - ${value.max.toFixed(2)}
          </p>
          <MultiRangeSlider
            min={1}
            max={100}
            onChange={({ min, max }) => setValue({ min: min, max: max })}
          />
        </div>
      </div>
      <div className="my-8">
        <CatTitle title="By artist" />
        <div className="transition-all overflow-hidden">
          <p className="underline mb-4">All</p>
          <p className="mb-4 last:mb-0">Below $100.00</p>
          <p className="mb-4 last:mb-0">$100.00 - $150.00</p>
          <p className="mb-4 last:mb-0">$150.00 - $200.00</p>
          <p className="mb-4 last:mb-0">Above $200.00</p>
        </div>
      </div>
      <div className="mb-4">
        <CatTitle title="Collection year" />
        <div></div>
      </div>
    </aside>
  );
};

export default SideNav;
