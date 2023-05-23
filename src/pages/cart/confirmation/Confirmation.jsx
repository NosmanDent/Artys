import React, { useContext } from "react";
import illustration1 from "../../../assets/eclipse/Illustration1.png";
import illustration2 from "../../../assets/eclipse/Illustration2.png";
import { Context } from "../../../Context";

function Confirmation() {
  const { name } = useContext(Context);
  return (
    <>
      <main>
        <div className="container mx-auto my-28">
          <div className={`max-w-[1064px] mx-auto pb-8`}>
            <div className="-z-10 absolute  h-[78px] w-[80px] bg-[#006CA2] blur-2xl -left-[21px] top-[112px]"></div>
            <div className="-z-10 absolute  h-[112px] w-[129px] bg-[black] blur-[35px] right-10 top-[156px]"></div>
            <div className="-z-10 absolute  h-[90px] w-[80px] bg-[#9B62EC] blur-[30px]  top-[396px]"></div>

            <div className="h-[257px] md:h-[50vh] mb-16 md:mb-0 z-10">
              <img
                src={illustration1}
                alt=""
                className="h-full block mx-auto"
              />
            </div>
            <article className="text-grey text-center leading-[156%]">
              <h4 className="my-4 font-medium text-lg md:text-[1.5rem] ">
                Hey {name.split(" ")[0]}, thank you for your purchase.
              </h4>
              <p className="md:text-xl text-[#616161] md:text-grey flex items-end justify-center">
                You are amazing. Cheers to being ARTSY!{" "}
                <img
                  src={illustration2}
                  alt=""
                  className="h-10 hidden md:inline"
                />
              </p>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default Confirmation;
