const Header = () => {
  return (
    <div className="flex bg-yellow-400 h-[5rem] w-full">
      <div className="flex flex-row  justify-center items-center">
        <a className=" text-4xl ml-50">eCommerce</a>
      </div>
      <div className="flex flex-row justify-center items-center ml-50">
        <ul className="">
          <li className="flex flex-row ">
            <a className="text-3xl">Home</a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12 ml-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
