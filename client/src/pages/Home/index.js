import React, { useState } from "react";
import { Address, User, UserDetails } from "../../components";

function Home() {
  const [activeTab, setActiveTab] = useState("Address");

  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <ul className="flex mx-2 mt-2">
            <Tabs {...{ setActiveTab, activeTab }} text="Address" />
            <Tabs {...{ setActiveTab, activeTab }} text="User" />
            <Tabs {...{ setActiveTab, activeTab }} text="User Details" />
          </ul>
          {activeTab === "User" ? (
            <div className="mt-2">
              <User {...{ setActiveTab }} />
            </div>
          ) : activeTab === "Address" ? (
            <div className="mt-4">
              <Address {...{ setActiveTab }} />
            </div>
          ) : (
            <UserDetails {...{ setActiveTab }} />
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;

/* ---------------------------------- tabs ---------------------------------- */

const Tabs = ({ setActiveTab, activeTab, text }) => {
  return (
    <li className="flex-1 mr-2  bg-gray-200" onClick={() => setActiveTab(text)}>
      <span className={`${activeTab === text ? "tab__active" : "tab__"}`}>
        {text}
      </span>
    </li>
  );
};
