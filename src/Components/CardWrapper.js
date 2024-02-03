import React from "react";
import style from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  const height = props.height ? props.height : "";
  const width = props.width ? props.width : "";
  const maxWidth = props.maxWidth ? props.maxWidth : "";

  let cls = props.hover === "none" ? style.cardWrapper : style.cardWrapper + " " + style.cardWrapperHover;
  if (props.onClick) {
    cls += " " + style.clickable;
  }

  return (
    <div
      className={cls + " card_wrapper"}
      style={{ height: height, width: width, maxWidth: maxWidth }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default CardWrapper;
