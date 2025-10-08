import React from "react";
import { PuffLoader } from "react-spinners";

const Animation = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        backdropFilter: "blur(8px)",
      }}
    >
      <PuffLoader color="#632EE3" loading size={80} />
    </div>
  );
};

export default Animation;
