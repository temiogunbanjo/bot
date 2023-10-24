import React from "react";
import { mergeClassNames } from "../../utility";

function Stack({ children, className = "", sx = {}, ...others }) {
  return (
    <div
      className={mergeClassNames("flex flex-col", className)}
      style={sx}
      {...others}
    >
      {children}
    </div>
  );
}

export default Stack;
