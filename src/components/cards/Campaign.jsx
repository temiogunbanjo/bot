import React from "react";
import { BsBarChartFill } from "react-icons/bs";

function Campaign({ title = "", candidates = 0, sx = {} }) {
  return (
    <div
      className="p-8 bg-red-500 hover:bg-yellow-600 cursor-pointer"
      style={{ ...sx }}
    >
      <BsBarChartFill fontSize={48} style={{ marginBottom: "15px" }} />
      <h3 className="font-semibold my-1 text-lg">{title}</h3>
      <span className="text-sm">{`${candidates} Candidates`}</span>
    </div>
  );
}

export default Campaign;
