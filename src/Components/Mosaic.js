import React from "react";
import style from "./Mosaic.module.css";
// import small from "../images/mosaic_small_test1.png";
// import large from "../images/mosaic_large_test1.png";


const Mosaic = (props) => {

  const tiles = [
    "../../../../img/mosaic_large_test2.png",
    "../../../../img/mosaic_medium_test2.png", 
    "../../../../img/mosaic_small_test2.png"
  ]

  let backgroundImage = "";
  for (var i=0; i<tiles.length; i++) {
    backgroundImage += `url(${tiles[i]}), `
  }

  backgroundImage = backgroundImage.substring(0, backgroundImage.length-2);

  return (
    <div className={style.parent}>
      <div className={style.backgroundParent}>
        <div className={style.background} style={{backgroundImage: backgroundImage}}></div>
      </div>
      {props.children}
    </div>
  );
};

export default Mosaic;