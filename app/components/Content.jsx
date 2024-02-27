import Image from "next/image";
import React from "react";
import trophyPic from "/public/1.png";
import pic2 from "/public/2.png";
import pic3 from "/public/3.png";

const Content = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <Image className="mx-3" width={600} src={trophyPic} alt="trophy" />
        <div className="mt-8 mx-5">
          <h1 className="text-xl text-justify font-extrabold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <ul className="list-disc list-inside mx-5 mt-3 text-justify text-xl ">
            <li>
              C.R.I.&apos;s energy efficient products are well recognized by
              various Government Institutions, as trustworthy products for
              various projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{" "}
            </li>
          </ul>
          <Image className="py-7" src={pic2} alt="pic" />
          <h1 className="mx-5 text-justify text-xl">
            Government of India has awarded the{" "}
            <span className="font-extrabold">
              &quot;National Energy Conservation Award 2018&quot;
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </h1>
        </div>
      </div>

      <div className="flex flex-col text-justify items-center justify-center">
        <h1 className="mx-5 mt-16 mb-5 text-xl font-semibold">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h1>
        <Image className="px-5" height={520} alt="products pic" src={pic3} />
        <p className="font-semibold text-base mx-5 mt-5">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>

      <hr class="border-t-2 border-red-500 w-[96%] mx-auto my-5" />

      <div class="mx-3 mb-10 flex flex-col items-center gap-5">
        <h1 class="text-xl font-bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>
        <h1 class="text-lg font-semibold text-center">
          CHEMICALS & PROCESS<span class="text-red-600"> | </span>POWER
          <span class="text-red-600">| </span>WATER & WASTE WATER
          <span class="text-red-600"> | </span>OILS & GAS
          <span class="text-red-600">| </span>PHARMA
          <span class="text-red-600"> | </span>SUGARS & DISTILLERIES
          <span class="text-red-600">| </span>PAPER & PULP
          <span class="text-red-600"> | </span>MARINE & DEFENCE
          <span class="text-red-600">| </span>METAL & MINING
          <span class="text-red-600"> | </span>FOOD & BEVERAGE
          <span class="text-red-600">| </span>PETROCHEMICAL & REFINERIES
          <span class="text-red-600"> | </span>SOLAR
          <span class="text-red-600"> | </span>BUILDING
          <span class="text-red-600">| </span>HVAC{" "}
          <span class="text-red-600"> | </span>FIRE FIGHTING
          <span class="text-red-600">| </span>AGRICULTURE & RESIDENTIAL
        </h1>
      </div>
    </>
  );
};

export default Content;
