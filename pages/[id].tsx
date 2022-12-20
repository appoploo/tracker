import { useRouter } from "next/router";
import { LicenseButton } from "../components/license-button";
import { ScheduledDropdown } from "../components/scheduled-dropdown";
import { SideMenu } from "../components/sidemenu";
import { TabList } from "../components/tablist";
import { TimeLine } from "../components/timeline";
import { TrackerSelector } from "../components/tracker-selector";
import { usePoints } from "../lib/points/queries";
import styles from "../styles/Home.module.css";
import React, { CSSProperties, useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [percentage, setPercentage] = useState(93.8);
  function convertPercentages(percentage: number) {
    return (percentage * 5) / 100;
  }
  return (
    <div className="h-screen overflow-hidden ">
      <div className="grid grid-cols-[60px_2fr]">
        <SideMenu />
        <div className=" grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-[768px_2fr] ">
          <div className=" grid grid-rows-[220px_1fr] gap-2  bg-base-100">
            <div className=" bg-base-300  grid grid-rows-[100px_100px]  md:grid-cols-2  p-4 ">
              <div>
                <button className="w-4 h-4 md:w-6 md:h-6 md:text-lg flex justify-center items-center font-bold  text-white bg-base-100  rounded  mb-2 md:mb-4">
                  ↰
                </button>
                <h2 className="block text-white  w-32 md:w-40 mb-2 md:mb-4 text-xs md:text-lg ">
                  Alex Williams
                </h2>
                <div className="text-slate-600  text-xs  mt-1 md:mt-2  mb-2 md:mb-4">
                  <h2 className="flex ">
                    BedFord Group
                    <span>・</span> Amey Rail
                  </h2>
                  <h2 className="flex ">
                    HGV Class 1 <span>・</span>
                    C+E
                  </h2>
                </div>
                <LicenseButton />
              </div>
              <div>
                <div className=" flex gap-x-2">
                  <TrackerSelector />
                  <div className="ml-auto flex gap-x-1">
                    <button className="w-6 h-6 text-lg flex justify-center items-center font-bold  text-white  bg-base-100 rounded   mb-4">
                      ⚐
                    </button>
                    <button className="w-6 h-6 text-lg flex justify-center items-center font-bold  text-white  bg-base-100 rounded   mb-4">
                      ➭
                    </button>
                  </div>
                </div>
                <div className="hidden  md:mt-12 xl:mt-4 md:flex justify-end md: gap-x-10 mt-4 ">
                  <div>
                    <h2 className="text-white text-lg">37548 km</h2>
                    <h2 className="text-gray-400 text-sm">Driver score</h2>
                    <h2 className="text-green-700 text-sm text-right ">
                      + 0.28
                    </h2>
                  </div>

                  <div
                    style={{ "--value": percentage } as React.CSSProperties}
                    className={clsx(
                      "radial-progress text-clip",
                      { "text-green-600": percentage > 70 },
                      { "text-red-600": percentage < 70 }
                    )}
                  >
                    {`${convertPercentages(percentage)}`}
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-base-300 px-4">
              <TabList />
              <div className="mx-4 py-4 flex   ">
                <h3 className="text-xs text-gray-600 px-2">
                  Last ubdated 09:05
                </h3>
                <div className="flex gap-3 ml-auto">
                  <button className=" w-24  h-7 md:w-28 md:h-8 text-xs font-normal flex justify-center items-center bg-base-100 text-white   rounded-sm   mb-4">
                    ⤓ Download
                  </button>
                  <button className=" w-24 h-7  md:w-28 md:h-8 text-xs font-normal flex justify-center items-center gap-4 bg-base-100 text-white   rounded-sm   mb-4">
                    <span>◀ </span>
                    <span>Today</span>
                    <span>▶</span>
                  </button>
                </div>
              </div>
              <div className="flex gap-1 mx-3 my-2">
                <picture>
                  <img
                    src="https://pngimg.com/uploads/truck/truck_PNG16247.png"
                    width={50}
                    height={50}
                    alt="Track"
                  ></img>
                </picture>
                <div>
                  <h1 className="text-white text-sm">FD63 VCW</h1>
                  <h2 className="text-gray-600 text-xs flex">
                    Mercedes Arocs 400-2018 <span> ・ </span>
                    White
                  </h2>
                </div>
              </div>

              <div className="text-sm px-4 py-4">
                <div className=" w-11/12 md:w-full h-10 px-2 py-2 text-xs xl:text-sm flex  mb-3  rounded-lg bg-base-100">
                  <div className="flex gap-9">
                    <span className="text-gray-500">Scheduled 19:30</span>
                    <span className="text-white">Install C1907-484217</span>
                  </div>

                  <ScheduledDropdown />
                </div>

                <div className="w-11/12 md:w-full h-10  flex px-2 py-2 text-xs xl:text-sm bg-base-100 rounded-lg">
                  <div className="text-gray-500 mr-8">Scheduled 17:50</div>
                  <div className="text-white">Install C1907-475865</div>

                  <div className="  hidden w-36 h-5  md:flex justify-center items-center mx-auto bg-yellow-500 rounded-lg  text-slate-800 border border-black">
                    Expected 25 min late
                  </div>

                  <ScheduledDropdown />
                </div>
              </div>

              <div>
                <button className=" block text-white btn btn-primary md:hidden">
                  View timeline
                </button>
                <div className=" hidden md:block md:overflow-auto">
                  <TimeLine />
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
<TrackerSelector />;
