import React from "react";
import { mergeClassNames } from "../../utility";

function TextInput({
  startAdornment,
  sx = {},
  inputProps = {},
  placeholder = "Type here...",
  className = "",
  ...rest
}) {
  const { className: iClassName = "", ...remInputProps } = inputProps;
  return (
    <div
      className={mergeClassNames(
        "flex flex-row items-center rounded-full w-full px-2",
        className
      )}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        maxWidth: "650px",
        ...sx,
      }}
    >
      {startAdornment}
      <input
        className={mergeClassNames(
          "bg-transparent border-none outline-none",
          "rounded-full p-3 w-full text-center text-base",
          iClassName
        )}
        placeholder={placeholder}
        {...rest}
        {...remInputProps}
      />
    </div>
  );
}

export default TextInput;
