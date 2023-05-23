import React from "react";
import Transitions from "../components/Transitions";
import Hero from "../components/Hero";
import HeroMobile from "../components/HeroMobile";
import productOne from "../assets/featured/Featured-product-3.png";
import productTwo from "../assets/featured/Featured-product-1.png";
import productThree from "../assets/featured/Featured-product-2.png";
import commentOne from "../assets/eclipse/Ellipse-14.png";
import commentTwo from "../assets/eclipse/Ellipse-15.png";
import commentThree from "../assets/eclipse/Ellipse-16.png";
import commentFour from "../assets/eclipse/Ellipse-17.png";
import commentFive from "../assets/eclipse/Ellipse-18.png";
import { BsArrowRight } from "react-icons/bs";
import image from "../assets/eclipse/image.png";
import FadeIn from "../components/FadeIn";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <Transitions>
      <div>
        <section className="mt-10">
          <h1 className="mb-[30px] font-medium md:font-semibold font-clash text-center md:text-[80px] text-[2rem] px-4 leading-[150%] md:leading-[120%] max-w-[1068px] mx-auto">
            Photography is poetry{" "}
            <span className="hidden md:inline">
              & <br />
            </span>{" "}
            <span className="md:hidden">and</span> beautiful untold stories
          </h1>
          <p className="md:text-[1.25rem] font-medium px-4 text-center max-w-[926px] mx-auto leading-[156%] md:leading-[120%]">
            Flip through more than 10,000 vintage shots, old photograghs,
            historic <br className="hidden md:inline" /> images and captures
            seamlessly in one place. Register to get top access.
          </p>
          <div className="md:overflow-x-hidden">
            <Hero />
            <HeroMobile />
          </div>
        </section>
        <main className="mx-10">
          <div>
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold border-b border-black pb-10 mb-10">
              Featured Products
            </h1>
            <section className="flex xl:flex-row flex-col flex-1 w-full gap-6">
              <div className="xl:w-1/2 w-full relative inline-block ">
                <img src={productOne} alt="" className="w-full" />
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0 hover:opacity-50 flex flex-row items-center justify-center h-full"></div>
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0  flex xl:flex-row flex-col xl:items-center xl:justify-center items-center justify-between xl:py-0 py-8 h-full hover:opacity-100">
                  <h1 className="text-white xl:flex hidden flex-row items-center font-bold tracking-wide text-4xl">
                    View product
                  </h1>
                  <h1 className="text-white flex flex-row items-center font-bold tracking-wide lg:text-4xl text-2xl whitespace-nowrap  xl:hidden">
                    The Boolean Egyptian
                  </h1>

                  <div className="text-3xl border border-white rounded-full p-6">
                    <BsArrowRight />
                  </div>
                </div>
              </div>

              <div className="xl:w-1/2 w-full flex flex-col items-start justify-between">
                <h1 className="text-3xl font-bold tracking-wide xl:flex hidden">
                  The Boolean Egyptian
                </h1>
                <p className="md:text-xl sm:text-sm text-xs tracking-wide">
                  orem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="flex flex-row items-center gap-24 xl:gap-0 xl:mt-0 mt-3">
                  <div className="flex flex-row items-center xl:w-full lg:w-[100px] group">
                    <img src={commentOne} alt="" className="" />
                    <img
                      src={commentTwo}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentThree}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFour}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFive}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4 "
                    />
                  </div>

                  <div className="">
                    <h1 className="text-xl xl:text-2xl  tracking-wide xl:ml-8 font-semibold whitespace-nowrap">
                      83 major creators
                    </h1>
                  </div>
                  <div className="text-3xl border border-gray-600 rounded-full p-6 xl:ml-36 xl:flex hidden">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </section>
            <section className="flex xl:flex-row flex-col flex-1 w-full gap-6 mt-16 border-y p-8 border-black">
              <div className="xl:w-1/2 w-full xl:flex hidden flex-col items-start justify-between">
                <h1 className="text-3xl font-bold tracking-wide xl:flex hidden">
                  The Boolean Egyptian
                </h1>
                <p className="md:text-xl sm:text-sm text-xs tracking-wide">
                  orem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="flex flex-row items-center gap-24 xl:gap-0 xl:mt-0 mt-3">
                  <div className="flex flex-row items-center xl:w-full lg:w-[100px] group">
                    <img src={commentOne} alt="" className="" />
                    <img
                      src={commentTwo}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentThree}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFour}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFive}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4 "
                    />
                  </div>

                  <div className="">
                    <h1 className="text-xl xl:text-2xl  tracking-wide xl:ml-8 font-semibold whitespace-nowrap">
                      83 major creators
                    </h1>
                  </div>
                  <div className="text-3xl border border-gray-600 rounded-full p-6 xl:ml-36 xl:flex hidden">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 w-full relative inline-block ">
                <img src={productTwo} alt="" className="w-full" />
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0 hover:opacity-50 flex flex-row items-center justify-center h-full"></div>
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0  flex xl:flex-row flex-col xl:items-center xl:justify-center items-center justify-between xl:py-0 py-8 h-full hover:opacity-100">
                  <h1 className="text-white xl:flex hidden flex-row items-center font-bold tracking-wide text-4xl">
                    View product
                  </h1>
                  <h1 className="text-white flex flex-row items-center font-bold tracking-wide lg:text-4xl text-2xl whitespace-nowrap  xl:hidden">
                    The Boolean Egyptian
                  </h1>

                  <div className="text-3xl border border-white rounded-full p-6">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 w-full flex xl:hidden flex-col items-start justify-between">
                <h1 className="text-3xl font-bold tracking-wide xl:flex hidden">
                  The Boolean Egyptian
                </h1>
                <p className="md:text-xl sm:text-sm text-xs tracking-wide">
                  orem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="flex flex-row items-center gap-24 xl:gap-0 xl:mt-0 mt-3">
                  <div className="flex flex-row items-center xl:w-full lg:w-[100px] group">
                    <img src={commentOne} alt="" className="" />
                    <img
                      src={commentTwo}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentThree}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFour}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFive}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4 "
                    />
                  </div>

                  <div className="">
                    <h1 className="text-xl xl:text-2xl  tracking-wide xl:ml-8 font-semibold whitespace-nowrap">
                      83 major creators
                    </h1>
                  </div>
                  <div className="text-3xl border border-gray-600 rounded-full p-6 xl:ml-36 xl:flex hidden">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </section>
            <section className="flex xl:flex-row flex-col flex-1 w-full gap-6 mt-10 border-b border-black pb-10">
              <div className="xl:w-1/2 w-full relative inline-block ">
                <img src={productThree} alt="" className="w-full" />
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0 hover:opacity-50 flex flex-row items-center justify-center h-full"></div>
                <div className="w-full absolute top-0 left-0 gap-4 bg-black/50 text-white opacity-0  flex xl:flex-row flex-col xl:items-center xl:justify-center items-center justify-between xl:py-0 py-8 h-full hover:opacity-100">
                  <h1 className="text-white xl:flex hidden flex-row items-center font-bold tracking-wide text-4xl">
                    View product
                  </h1>
                  <h1 className="text-white flex flex-row items-center font-bold tracking-wide lg:text-4xl text-2xl whitespace-nowrap  xl:hidden">
                    The Boolean Egyptian
                  </h1>

                  <div className="text-3xl border border-white rounded-full p-6">
                    <BsArrowRight />
                  </div>
                </div>
              </div>

              <div className="xl:w-1/2 w-full flex flex-col items-start justify-between">
                <h1 className="text-3xl font-bold tracking-wide xl:flex hidden">
                  The Boolean Egyptian
                </h1>
                <p className="md:text-xl sm:text-sm text-xs tracking-wide">
                  orem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor pur
                </p>
                <div className="flex flex-row items-center gap-24 xl:gap-0 xl:mt-0 mt-3">
                  <div className="flex flex-row items-center xl:w-full lg:w-[100px] group">
                    <img src={commentOne} alt="" className="" />
                    <img
                      src={commentTwo}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentThree}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFour}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4"
                    />
                    <img
                      src={commentFive}
                      alt=""
                      className="xl:-ml-6 md:-mx-4 -mx-4 "
                    />
                  </div>

                  <div className="">
                    <h1 className="text-xl xl:text-2xl  tracking-wide xl:ml-8 font-semibold whitespace-nowrap">
                      83 major creators
                    </h1>
                  </div>
                  <div className="text-3xl border border-gray-600 rounded-full p-6 xl:ml-36 xl:flex hidden">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <section className="bg_home mt-16">
          <div className="">
            <h1 className=" md:ml-20 mx-10 md:pt-6 pt-4 text-white font-semibold lg:text-3xl md:text-xl sm:text-lg text-sm  whitespace-nowrap ">
              See Upcoming Auctions and Exhibitions
            </h1>
            <div className="flex items-center justify-center mt-5 pb-10 relative w-full">
              <div className="md:mx-20 mx-10 w-full relative inline-block ">
                <img src={image} alt="" className="w-full" />
                <div className="lg:px-6 lg:pb-6 w-full absolute top-0 left-0 lg:gap-4  lg:flex lg:flex-row lg:items-end flex flex-wrap px-5 gap-2  text-white h-full">
                  <div className="xl:text-7xl lg:text-6xl  lg:mb-20 text-3xl">
                    01
                  </div>
                  <div className="flex flex-col xl:gap-6 lg:gap-4">
                    <div className="flex flex-row items-start">
                      <div className="bg-white xl:p-2 p-1 rounded-full mt-2 mr-3" />
                      <h1 className="xl:text-2xl lg:text-xl md:text-lg text-xs mt-2 md:mt-0 font-serif xl:tracking-wide font-semibold">
                        MONALISA REDEFINED IN <br />
                        STYLE.
                      </h1>
                    </div>
                    <div>
                      <h1 className="lg:text-sm text-xs ">
                        Start on : 08:00 GTS . Monday
                      </h1>
                    </div>
                    <div>
                      <h1 className="xl:text-lg lg:text-md text-xs md:font-semibold md:flex hidden">
                        GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT
                        WITH
                        <br /> INVESTORS AND AUCTIONEERS ACROSS THE WORLD
                        BRINGING THEIR <br />
                        HIGHEST AND LOWEST BIDS.
                      </h1>
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="underline xl:text-2xl lg:text-xl text-xs font-semibold whitespace-nowrap">
                      See more
                    </div>
                    <div className=" ">
                      <button className="border-2 border-white xl:text-2xl text-xs rounded-lg md:px-6 md:py-3 px-4 py-2  whitespace-nowrap">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className=" border border-black" />
          <div className="my-8 flex flex-row items-center justify-between md:mx-20 mx-8">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold whitespace-nowrap">
              Explore Marketplace
            </h1>
            <div className="md:flex hidden">
              <BsArrowRight className="text-7xl font-bold text-blue-700" />
            </div>
            <div className="text-3xl border border-black rounded-full p-3 flex md:hidden">
              <BsArrowRight />
            </div>
          </div>
          <div className=" border border-black" />
          <div className="my-8 flex flex-row items-center justify-between md:mx-20 mx-8">
            <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold whitespace-nowrap">
              See auctions
            </h1>
            <div className="md:flex hidden">
              <BsArrowRight className="text-7xl font-bold text-blue-700" />
            </div>
            <div className="text-3xl border border-black rounded-full p-3 flex md:hidden">
              <BsArrowRight />
            </div>
          </div>
          <div className=" border border-black" />
        </section>
        <section className="bg-[#e2e2e2] mb-[66px] md:mb-[147px] mx-4 md:mx-0">
          <div className="container font-clash mx-auto md:py-[75px] relative">
            <div className="overflow-hidden relative">
              <article className="flex justify-between">
                <h2 className="font-semibold md:ml-0 ml-4 mt-[7px] md:mt-0 text-[1.5rem] md:text-[55px] leading-[155%] text-[#161616] max-w-[256px] md:max-w-[535px]">
                  TOP CREATORS OF THE WEEK
                </h2>
                <div className="flex">
                  <div className="hidden md:block rounded-full w-2.5 bg-[#AEAEAE] border mr-[34px] overflow-hidden  items-end">
                    <div className="w-full h-1/5 bg-grey-dark rounded-full"></div>
                  </div>
                  <ul className=" md:relative md:right-0  text-grey text-[10px] md:text-[2.5rem] leading-[155%] md:mr-8 mr-10 flex md:block gap-2 md:gap-4">
                    <li className="mb-5">Editorial</li>
                    <li className="mb-5">Fashion</li>
                    <li className="mb-5">Lifestyle</li>
                    <li className="">Blueprint</li>
                  </ul>
                </div>
              </article>
              <p className="text-[13px] md:text-3xl md:relative leading-[130%] text-black/[0.57] font-[200] md:mr-[12rem] px-4 md:px-0 mt-9">
                “Everything always looked better in black and white. Everything
                always as if it were the first time; there’s always more people
                in a black and white photograph. It just makes it seem that
                there were more people at a gig, more people at a football
                match, than with colour photography. Everything looks more
                exciting.”– Jack Lowden
                <span className="text-grey text-[2rem] md:text-[3rem] leading-[155%] font-bold absolute bottom-24 pr-4 md:pr-0 right-0 md:right-8">
                  CIRCA
                </span>
              </p>
              <div className="flex md:my-[75px]">
                <p className="my-4 ml-auto md:mr-8 font-bold text-[4rem] md:text-[170px] text-[#161616] md:leading-[150px] pr-4 md:pr-0 line-through decoration-8">
                  1985
                </p>
              </div>
            </div>
            <FadeIn />
          </div>
        </section>
        <Newsletter className="px-4 md:px-0" />
      </div>
    </Transitions>
  );
};

export default Home;
