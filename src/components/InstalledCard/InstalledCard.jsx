import React from "react";
import downloadConverter from "../../utility/converter";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";

const InstalledCard = ({ app, handleUnInstall }) => {
  const download = downloadConverter(app.downloads);

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between items-center p-4">
        <div className="flex justify-between items-center gap-4">
          <div>
            <img src={app.image} alt="" className="w-[80px] rounded-md" />
          </div>
          <div>
            <h2 className="text-xl font-medium text-[#001931]">{app.title}</h2>
            <div className="flex justify-start items-center gap-4 mt-2">
              <div className="flex justify-between items-center gap-1">
                <img src={downloadImg} alt="" className="w-4" />
                <p className="font-medium text-[#00D390]">{download}</p>
              </div>
              <div className="flex justify-between items-center gap-1">
                <img src={ratingImg} alt="" className="w-4" />
                <p className="font-medium text-[#FF8811]">{app.ratingAvg}</p>
              </div>
              <div className="flex justify-between items-center gap-1">
                <p className="font-medium text-[#627382]">{app.size}MB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleUnInstall(app.id)}
            className="rounded-sm text-white py-3 px-4 bg-[#00D390] hover:bg-[#00b57d] cursor-pointer"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledCard;
