import React from "react";
import downloadConverter from "../../utility/converter";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const download = downloadConverter(app.downloads);

  return (
    <Link to={`/details/${app.id}`}>
      <div className="rounded-md bg-white shadow-sm hover:shadow-lg duration-300">
        <div className="p-4">
          <img src={app.image} alt="" className="w-full h-[250px] rounded-md" />
          <h3 className="text-xl font-medium my-4">{app.title}</h3>
          <div className="flex justify-between items-center">
            <div className="bg-[#F1F5E8] rounded-md">
              <h3 className="py-1 px-3 font-medium text-sm text-[#00D390] flex justify-between items-center gap-1">
                <span>
                  <img src={downloadIcon} alt="" className="w-3" />
                </span>
                {download}
              </h3>
            </div>
            <div className="bg-[#FFF0E1] rounded-md">
              <h3 className="py-1 px-3 font-medium text-sm text-[#FF8811] flex justify-between items-center gap-1">
                <span>
                  <img src={ratingIcon} alt="" className="w-3" />
                </span>
                {app.ratingAvg}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
