import React, { useState } from "react";
import { mergeClassNames } from "../../utility";
import {
  MdExpandLess,
  MdExpandMore,
  MdOutlineArrowRight,
} from "react-icons/md";

export const MenuItem = ({
  icon,
  children,
  onClick,
  style = {},
  className = "",
  ...others
}) => {
  style = {
    ...style,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px",
    // border: "1px solid",
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-between hover:bg-[rgba(34, 197, 94, 0.5)] cursor-pointer"
      onClick={(ev) => {
        setIsOpen(!isOpen);
        if (onClick) onClick(ev);
      }}
    >
      <li style={style} className={mergeClassNames("", className)} {...others}>
        {icon && (
          <div className="mr-3 text-green-500 fill-green-500">{icon}</div>
        )}
        {children}
      </li>
      {isOpen ? <MdExpandMore /> : <MdOutlineArrowRight />}
    </div>
  );
};

function Menu({ children, ...others }) {
  return <ul {...others}>{children}</ul>;
}

export default Menu;
