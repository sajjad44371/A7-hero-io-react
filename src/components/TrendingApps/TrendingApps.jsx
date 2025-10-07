import React from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import AppCard from "../AppCard/AppCard";

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
        <div>
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
