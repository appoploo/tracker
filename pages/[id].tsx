import { SideMenu } from "../components/sidemenu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden ">
      <div className="grid grid-cols-[60px_2fr]">
        <SideMenu />
        <div className=" grid grid-cols-[800px_2fr]">
          <div className=" grid grid-rows-[220px_1fr] gap-2  bg-slate-900">
            <div className=" bg-slate-800  grid grid-cols-2 p-4 ">
              <div className="">
                <button className="w-10 h-10 text-2xl font-bold block text-white  bg-gray-700 rounded   mb-4">
                  ↰
                </button>
                <h2 className="block text-white border text-lg ">
                  Alex Williams
                </h2>
                <div className="text-slate-600  text-xs mt-2 mb-4">
                  <div className="flex gap-x-2">
                    <span>BedFord Group</span> <span>Amey Rail</span>
                  </div>
                  <div className="flex gap-x-2">
                    <span>HGV Class 1</span>
                    <span>C+E</span>
                  </div>
                </div>
                <div className=" bg-gray-700  w-72 rounded-sm ">
                  <div className="flex gap-x-2 justify-center items-center px-3 py-2 ">
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
                    <span className="text-yellow-600 text-sm">
                      License not checked for 6 months
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-8 border-black"></div>
            </div>
            <div className="border-8 border-black bg-slate-800"></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
