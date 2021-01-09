import React from "react";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row-auto">
          <div className="flex flex-wrap -mx-1 overflow-hidden">
            <div className="px-1 w-1/4 overflow-hidden md:visible sm:invisible">
              <Sidebar />
            </div>
            <div className="px-1 w-3/4">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
