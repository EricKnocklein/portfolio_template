import React from "react";

import CardWrapper from "./CardWrapper";
import LRText from "./LRText";
import ImageDisplay from "./ImageDisplay";
import Markdown from "react-markdown";

import style from "./CareerCard.module.css";

const CareerCard = (props) => {
  let value = props.data;

  let imDisp = "";
  let pSyle = "";
  if (value.images) {
    imDisp = <ImageDisplay imgs={value.images} />;
    pSyle = style.parent;
  }

  return (
    <CardWrapper maxWidth="800px" hover="none">
      <div id={props.id} className={pSyle}>
        <div className={style.imCont}>
          <div className={style.imHolder}>{imDisp}</div>
        </div>
        <div className={style.topCont}>
          <LRText leftText={value.dates} />
          <h1 className={style.title}>{value.title}</h1>
        </div>
      </div>
      <div className={style.content}>
        <Markdown>{value.description}</Markdown>
      </div>
    </CardWrapper>
  );
};

export default CareerCard;
