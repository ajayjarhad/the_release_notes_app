import React, { useState } from "react";

import Header from "./header";
import Versions from "./versions";
import Description from "./description";

const UI = () => {
  const [openedTab, setOpenedTab] = useState("");
  const getTab = (tab) => {
    //Using this fuction to access the child props
    setOpenedTab(tab);
  };
  return (
    <>
      <Header />
      <div className="flex flex-wrap h-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-row">
          <ul
            className="mb-0 list-none flex-wrap justify-between pt-3 pb-4 flex flex-col h-64 mt-20 "
            role="tablist"
          >
            <Versions getTab={getTab} />
          </ul>

          <Description openedTab={openedTab} />
        </div>
      </div>
    </>
  );
};

export default UI;
