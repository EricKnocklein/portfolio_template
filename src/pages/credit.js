import React from "react";

import style from "./credits.module.css";
import streak from "../images/paint_gold.png";

const Credit = () => {
  return (
    <div className={style.holder}>
      <div className={style.row}>
        <img src={streak} className={style.im} alt=""/>
        <a href="https://www.freepik.com/free-vector/collection-black-brushstrokes_9718487.htm#query=paint%20streak&position=0&from_view=keyword&track=ais&uuid=a7a5f808-2a5c-4903-b50e-2e5403cf36e3">
          Image by Vectonauta
        </a>
        {" on Freepik"}
      </div>
      <div className={style.row}>
        {"Portfolio template created by Eric Knocklein, see it "}
        <a href="https://github.com/EricKnocklein/portfolio_template">here</a>
        {" on GitHub"}
      </div>
    </div>
  );
};

export default Credit;
