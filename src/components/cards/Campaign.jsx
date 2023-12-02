import React from "react";
import { BsBarChartFill } from "react-icons/bs";
import { mergeClassNames } from "../../utility";

function Campaign({
  title = "",
  candidates = 0,
  categories = 0,
  status,
  sx = {},
  ...others
}) {
  return (
    <div
      className="flex flex-col p-8 bg-yellow-600 hover:bg-yellow-700 cursor-pointer"
      style={{ ...sx }}
      {...others}
    >
      {typeof status === "boolean" && (
        <span
          className={mergeClassNames(
            "inline-flex px-3 py-1.5 text-xs justify-self-end ml-auto rounded-full lowercase",
            !status ? "bg-orange-600" : "bg-yellow-800"
          )}
        >{`${!status ? "completed" : "ongoing"}`}</span>
      )}
      <BsBarChartFill fontSize={48} style={{ marginBottom: "15px" }} />
      <h3 className="font-semibold my-1 text-lg line-clamp-3">{title}</h3>
      <span className="text-sm">{`${categories} ${
        categories.length > 1 ? "Categories" : "Category"
      } · ${candidates} ${
        candidates.length > 1 ? "Candidates" : "Candidate"
      }`}</span>
    </div>
  );
}

export default Campaign;
