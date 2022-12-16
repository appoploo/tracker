import { SideMenu } from "../components/sidemenu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden ">
      <div className="grid grid-cols-[60px_2fr]">
        <SideMenu />
        <div className=" grid md:grid-cols-[768px_2fr] grid-cols-1">
          <div className=" grid grid-rows-[220px_1fr] gap-2  bg-slate-900">
            <div className=" bg-slate-800  grid grid-cols-2 p-4 ">
              <div className="">
                <button className="w-6 h-6 text-lg flex justify-center items-center font-bold  text-white  bg-gray-700 rounded   mb-4">
                  ↰
                </button>
                <h2 className="block text-white w-40  text-lg ">
                  Alex Williams
                </h2>
                <div className="text-slate-600  text-xs mt-2 mb-4">
                  <h2 className="flex ">
                    BedFord Group
                    <span>・</span> Amey Rail
                  </h2>
                  <h2 className="flex ">
                    HGV Class 1 <span>・</span>
                    C+E
                  </h2>
                </div>
                <div className=" bg-gray-700  w-72 rounded-sm ">
                  <div className=" w-40 h-7 flex justify-center items-center ml-28 bg-slate-700 rounded-lg  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span className="text-yellow-600 text-xs font-normal">
                      License not checked for 6 months
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-end gap-x-2">
                  <button className="w-36 h-6 text-xs font-normal flex justify-center items-center  text-white  bg-gray-700 rounded-sm   mb-4">
                    <span className=" w-6 h-4  bg-gray-500 rounded-lg mr-1">
                      3
                    </span>
                    Vehicles Nearby
                  </button>
                  <button className="w-6 h-6 text-lg flex justify-center items-center font-bold  text-white  bg-gray-700 rounded   mb-4">
                    ⚐
                  </button>
                  <button className="w-6 h-6 text-lg flex justify-center items-center font-bold  text-white  bg-gray-700 rounded   mb-4">
                    ➭
                  </button>
                </div>
                {/* <div className="radial-progress" style={{ "--value": "70" }}>
                  4.69
                </div> */}
              </div>
            </div>

            <div className=" bg-slate-800 px-4">
              <div className="tabs tab-bordered border-gray-600 flex justify-center items-center mx-3 my-5 ">
                <a className="tab tab-bordered border-white text-white">
                  Tracking
                </a>
                <a className="tab tab-bordered   text-white">Analytics</a>
                <a className="tab tab-bordered  text-white">Details</a>
              </div>
              <div className="mx-4 py-4 flex   ">
                <h3 className="text-xs text-gray-600 px-2">
                  Last ubdated 09:05
                </h3>
                <div className="flex gap-3 ml-auto">
                  <button className="w-28 h-8 text-xs font-normal flex justify-center items-center  text-white  bg-gray-700 rounded-sm   mb-4">
                    ⤓ Download
                  </button>
                  <button className="w-28 h-8 text-xs font-normal flex justify-center items-center gap-4  text-white  bg-gray-700 rounded-sm   mb-4">
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
                <div className="w-full h-10 px-2 py-2 flex bg-gray-700 mb-3  rounded-sm">
                  <div className="flex gap-9">
                    <span className="text-gray-500">Scheduled 19:30</span>
                    <span className="text-white">Install C1907-484217</span>
                  </div>

                  <div className="dropdown ml-auto">
                    <label tabIndex={0} className="m-1 text-white">
                      ▼
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full h-10  flex px-2 py-2 bg-gray-700  rounded-sm">
                  <div className="text-gray-500 mr-8">Scheduled 17:50</div>
                  <div className="text-white">Install C1907-475865</div>

                  <div className=" w-36 h-5  flex justify-center items-center mx-auto bg-yellow-500 rounded-lg  text-slate-800 border border-black">
                    Expected 25 min late
                  </div>

                  <div className="dropdown border border-black">
                    <label tabIndex={0} className=" m-1 text-white">
                      ▼
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ol className="relative border-l border-gray-200 h-96 overflow-auto">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    February 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Application UI code in Tailwind CSS
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Learn more{" "}
                    <svg
                      className="w-3 h-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    March 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Marketing UI design in Figma
                  </h3>
                  <p className="text-base font-normal text-gray-500">
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </p>
                </li>
                <li className="ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    April 2022
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    E-Commerce UI code in Tailwind CSS
                  </h3>
                  <p className="text-base font-normal text-gray-500">
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
