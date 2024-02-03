import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import style from "./ImageDisplay.module.css";
import Markdown from "react-markdown";

const ImageDisplay = (props) => {
  const [ind, setInd] = useState(0);

  const imgs = props.imgs;
  const bShow = imgs.length > 1 ? " " + style.buttonsShow : "";

  function clickHandler(offset) {
    let newInd = (ind + offset) % imgs.length;
    if (newInd < 0) newInd += imgs.length;
    setInd(newInd);
  }

  let caption = null;
  if (props.caption && imgs[ind].caption) {
    caption = (
      <div className={style.captionHolder}>
        <CardWrapper hover="none">
          <div className={style.captionSpacer}>
            <Markdown>{imgs[ind].caption}</Markdown>
          </div>
        </CardWrapper>
      </div>
    )
  }

  return (
    <div
      className={style.parent}
      style={{ backgroundImage: 'url("' + imgs[ind]["src"] + '")' }}
    >
      <img src={imgs[ind]["src"]} alt={imgs[ind]["alt"]}></img>
      <div className={style.buttons + bShow}>
        <CardWrapper>
          <div
            className={style.button}
            onClick={() => {
              clickHandler(-1);
            }}
          >
            <span className="fa-solid fa-caret-left"></span>
          </div>
        </CardWrapper>
        <CardWrapper>
          <div
            className={style.button}
            onClick={() => {
              clickHandler(1);
            }}
          >
            <span className="fa-solid fa-caret-right"></span>
          </div>
        </CardWrapper>
      </div>
      {caption}
    </div>
  );
};

export default ImageDisplay;
