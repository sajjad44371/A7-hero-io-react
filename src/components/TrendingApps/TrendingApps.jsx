import React from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TrendingApps = () => {
  const [appsData] = useDataFetch();

  //   home pages apps
  const featuredApps = appsData.slice(0, 8);

  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto">
        <div className="pt-[80px] pb-10 text-center">
          <h2 className="text-5xl font-bold text-[#001931] mb-3">
            Trending Apps
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="pt-[40px] pb-[80px] flex justify-center">
          <Link
            to="/apps"
            className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-sm text-white py-3 px-4"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
