import React from "react";

const Header = (props) => {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );
  return (
    <div className="my-auto px-3 py-5 shadow-md flex flex-row items-center">
      {logo}
      <h3 className="text-xl text-gray-600 pl-2">Keep</h3>
    </div>
  );
};

export default Header;
