import React from "react";

const AppCard = ({ app }) => {
  console.log(app);
  return (
    <div>
      <img src={app.image} alt="" />
    </div>
  );
};

export default AppCard;
