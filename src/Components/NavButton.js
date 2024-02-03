import React from "react";
import style from "./NavButton.module.css";
import streak from "../images/paint_gold.png";

const NavButton = (props) => {
  return (
    <div className={style.centeredCntainer} onClick={() => {window.location = props.link}}>
      <div className={style.animContainer}>
        <img src={streak} alt=""/>
      </div>
      <li key={"nav-item_" + props.name}>
        <a href={props.link}>{props.name}</a>
      </li>
    </div>
  );
};

export default NavButton;
