export function LicenseButton() {
  return (
    <div>
      <div className=" hidden md:w-60 lg:w-52 xl:w-60 md:h-11 mx-2 my-2 f md:flex  justify-center items-center  bg-base-100 rounded-md  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 w-3 h-3  md:h-6 md:w-6 text-yellow-600"
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
        <span className="text-yellow-600 text-xs font-mono md:font-normal">
          License not checked for 6 months
        </span>
      </div>
    </div>
  );
}
