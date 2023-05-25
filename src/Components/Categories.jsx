import React from "react";
import { TbPizza } from "react-icons/tb";
import { BiSushi } from "react-icons/bi";
import { GiHamburger,GiTomato,GiNoodles,GiStairsCake } from "react-icons/gi";

const Categories = () => {
  return (
    <>
      <div className=" text-center mt-10 md:mt-16">
        <span className="p-2 item-center font-thin ps-4 md:ps-6 pe-4 md:pe-6 rounded-xl bg-[#EB8E78] text-white uppercase">
          Categorías
        </span>
      </div>
      <div className="mt-7 md:mt-7">
        <span className="text-center font-black text-3xl md:text-5xl">
          <h1>Classic Categories</h1>
        </span>
      </div>
      <div className="container mx-auto mt-8 px-12  md:px-20  items-center ">
        <div className="p-3 md:flex gap-4">
          <div className=" mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="  mt-11 bg-white rounded-full p-5  mx-auto text-4xl">
                <TbPizza />
              </div>
              <div className="text-center text-base mt-7">Pizza</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $60
              </div>
            </div>
          </div>
          <div className="mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="mt-11 bg-white rounded-full p-5  mx-auto text-4xl">
                <BiSushi />
              </div>
              <div className="text-center text-base mt-7">Sushi</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $50
              </div>
            </div>
          </div>
          <div className=" mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="  mt-11 bg-white rounded-full p-5  mx-auto text-4xl">
                <GiHamburger />
              </div>
              <div className="text-center text-base mt-7">Hamburguesas</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $60
              </div>
            </div>
          </div>
          <div className="mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="mt-11 bg-white rounded-full p-5  mx-auto text-4xl">
                <GiTomato />
              </div>
              <div className="text-center text-base mt-7">Veggie</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $60
              </div>
            </div>
          </div>
          <div className=" mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="  mt-11 bg-white rounded-full p-5 text-thin mx-auto text-4xl">
                <GiNoodles />
              </div>
              <div className="text-center text-base mt-7">Sopas</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $60
              </div>
            </div>
          </div>
          <div className="mb-3  w-[200px] bg-[#F7F7F7] hover:drop-shadow-xl hover:bg-[#F49B3F] duration-300 rounded-xl">
            <div className="flex flex-col ">
              <div className="mt-11 bg-white rounded-full p-5  mx-auto text-4xl">
                <GiStairsCake />
              </div>
              <div className="text-center text-base mt-7">Postres</div>
              <div className="text-center mt-2 text-base text-[#cfcfcf]  mb-10">
                Desde $60
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
