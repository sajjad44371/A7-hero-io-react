import React from "react";
import Banner from "../../components/Banner/Banner";
import States from "../../components/States/States";
import TrendingApps from "../../components/TrendingApps/TrendingApps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <States></States>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
