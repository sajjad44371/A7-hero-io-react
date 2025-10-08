import React, { useEffect, useState } from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import AppCard from "../../components/AppCard/AppCard";
import { Link } from "react-router";
import Animation from "../../components/Animation/Animation";
import AppError from "../AppError/AppError";

const Apps = () => {
  const [appsData] = useDataFetch();

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const searchValue = search.trim().toLocaleLowerCase();

  const searchedApps = searchValue
    ? appsData.filter((app) =>
        app.title.toLocaleLowerCase().includes(searchValue)
      )
    : appsData;

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (appsData && appsData.length > 0) {
      setLoading(false);
    }
  }, [appsData]);

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="pt-[80px] pb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001931] mb-3">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              ({searchedApps.length}) Apps Found
            </h3>
          </div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={handleSearchChange}
                type="search"
                required
                placeholder="Search Apps"
                className="w-[100px] md:w-[200px]"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5 pb-[80px]">
          {loading ? (
            <Animation></Animation>
          ) : searchedApps.length > 0 ? (
            searchedApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))
          ) : (
            <AppError></AppError>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
