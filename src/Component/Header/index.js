import React from "react";
import tailwind from "../../Asset/Logo/tailwind.svg";

const Header = () => {
  return (
    <div className="flex py-1 px-5 justify-between shadow">
      <div>
        <img className="py-2" src={tailwind} alt="tailwind" />
      </div>
      <div className="py-4">
      <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2" type="text" aria-label="Search" placeholder="Search" />
      </div>
      <div className="w-12 py-2">
        <img
          src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
