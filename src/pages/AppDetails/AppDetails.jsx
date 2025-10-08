import React, { useState } from "react";
import useDataFetch from "../../Hooks/useDataFetch";
import { useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import downloadConverter from "../../utility/converter";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { addDataToLS } from "../../utility/addToLS";

const AppDetails = () => {
  const params = useParams();
  const id = parseInt(params.id);

  const [appsData] = useDataFetch();

  const details = appsData.filter((app) => app.id === id);
  const app = details[0];

  const downloads = app ? downloadConverter(app.downloads) : "";
  const reviews = app ? downloadConverter(app.reviews) : "";

  const [install, setInstall] = useState(false);

  const handleInstall = (id) => {
    setInstall(true);

    if (!install) {
      addDataToLS(id);

      return;
    }
  };

  const chartData = app ? app.ratings : "";

  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto">
        {app ? (
          <div>
            <div className="flex justify-between items-start pt-[80px] pb-[40px] gap-10 border border-transparent border-b-gray-400">
              <div className="flex-1/3 bg-white w-[350px] h-[350px] flex justify-center items-center">
                <img src={app.image} alt="" className="w-[300px]" />
              </div>
              <div className="flex-2/3 ">
                <div className="border border-transparent pb-[30px] border-b-gray-400">
                  <h2 className="text-3xl font-bold text-[#001931]">
                    {app.title}
                  </h2>
                  <h3 className="text-xl text-[#627382] mt-2">
                    Developed by{" "}
                    <span className="font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
                      {app.companyName}
                    </span>
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-7 my-10">
                  <div className="pr-10">
                    <img src={downloadImg} alt="" className="w-10" />
                    <p className="text-[#001931] my-1">Downloads</p>
                    <h4 className="text-[#001931] text-4xl font-extrabold">
                      {downloads}
                    </h4>
                  </div>
                  <div className="pr-10">
                    <img src={ratingImg} alt="" className="w-10" />
                    <p className="text-[#001931] my-1">Average Ratings</p>
                    <h4 className="text-[#001931] text-4xl font-extrabold">
                      {app.ratingAvg}
                    </h4>
                  </div>
                  <div className="pr-10">
                    <img src={reviewImg} alt="" className="w-10" />
                    <p className="text-[#001931] my-1">Total Reviews</p>
                    <h4 className="text-[#001931] text-4xl font-extrabold">
                      {reviews}
                    </h4>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleInstall(app.id)}
                    className={`rounded-sm text-white py-3 px-4 bg-[#00D390] ${
                      install
                        ? "bg-gray-400 disabled cursor-not-allowed"
                        : "bg-[#00D390] hover:bg-[#00b57d] cursor-pointer"
                    }`}
                  >
                    {install ? "Installed" : `Install Now (${app.size}M)`}
                  </button>
                </div>
              </div>
            </div>
            <div className="py-10 border border-transparent border-b-gray-400">
              <h2 className="text-[#001931] font-semibold text-2xl">Ratings</h2>
              <div className="w-full h-[300px] flex justify-center ">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="count"
                      fill="#FF8811"
                      activeBar={<Rectangle fill="#00D390" stroke="#FFF0E1" />}
                      barSize={30}
                      radius={[0, 10, 10, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="pb-[80px]">
              <h2 className="text-[#001931] font-semibold text-2xl pt-10 pb-6">
                Description
              </h2>
              <p className="text-xl text-[#627382]">{app.description}</p>
            </div>
          </div>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default AppDetails;
