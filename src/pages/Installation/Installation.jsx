import React, { useEffect, useState } from "react";
import InstalledCard from "../../components/InstalledCard/InstalledCard";
import { getDataFromLS } from "../../utility/addToLS";
import useDataFetch from "../../Hooks/useDataFetch";
import removeDataId from "../../utility/removeFromDB";
import { toast } from "react-toastify";
import { Link } from "react-router";
import AppError from "../AppError/AppError";

const Installation = () => {
  const [appsData] = useDataFetch();
  const [appList, setAppList] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const storedId = getDataFromLS();
    const installedAppList = appsData.filter((app) =>
      storedId.includes(app.id)
    );
    setAppList(installedAppList);
  }, [appsData]);

  const handleUnInstall = (id) => {
    const removeApp = appList.filter((app) => app.id !== id);
    setAppList(removeApp);
    removeDataId(id);
    toast("🗑️ App Un-Installed!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSort = (type) => {
    setSortBy(type);

    if (type === "high-low") {
      const sortedApp = [...appList].sort((a, b) => b.downloads - a.downloads);
      setAppList(sortedApp);
    }
    if (type === "low-high") {
      const sortedApp = [...appList].sort((a, b) => a.downloads - b.downloads);
      setAppList(sortedApp);
    }
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="pt-[80px] pb-10 text-center">
          <h2 className="text-5xl font-bold text-[#001931] mb-3">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold">
              ({appList.length}) Apps Found
            </h3>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Download: {sortBy ? sortBy : ""}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("high-low")}>High-Low</a>
              </li>
              <li>
                <a onClick={() => handleSort("low-high")}>Low-High</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pb-[80px]">
          {appList.length === 0 ? (
            <AppError></AppError>
          ) : (
            appList.map((app) => (
              <InstalledCard
                key={app.id}
                app={app}
                handleUnInstall={handleUnInstall}
              ></InstalledCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
