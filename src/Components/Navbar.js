import React from "react";
import navData from "../data/nav.json";
import style from "./Navbar.module.css";
import logo from "../images/480.png"
import NavButton from "./NavButton";

const items = navData["nav-items"];
const content = items.map((o) => {
  return (
    <NavButton key={o.name} name={o.name} link={o.link} />
  );
});

let image_index = 0
if (items.length % 2 === 0) {
    image_index = items.length / 2
}

content.splice(
  image_index,
  0,
  <div key="logo-div" className={style.logoDiv}>
    <div className={style.growOnHover} onClick={() => {window.location = '/'}}>
        <img className={style.growOnHover} alt="The Logo" src={logo} />
    </div>
  </div>
);

const Navbar = () => {
  return (
    <ul className={style.nav}>
      {content}
    </ul>
  );
};

export default Navbar;
