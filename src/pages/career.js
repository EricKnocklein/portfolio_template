// Filename - pages/about.js

import React from "react";
import Mosaic from "../Components/Mosaic";
import NavButton from "../Components/NavButton";
import CardWrapper from "../Components/CardWrapper";
import Markdown from "react-markdown";
import CareerCard from "../Components/CareerCard";

import style from "./career.module.css";

import cData from "../data/career.json";

function create_section(data, name) {
  let cards = [];
  for (const [key, value] of Object.entries(data)) {
    cards.push(
      <CareerCard key={key} data={value} id={key}/>
    );
  }

  return (
    <div key={name}>
      <Mosaic>
        <div className={style.catHolder + " " + style.fade}>
          <CardWrapper width="50%" hover="none">
            <h1 className={style.linksTitle}>{name}</h1>
          </CardWrapper>
        </div>
      </Mosaic>
      <div className={style.proHolder}>
        <div className={style.gridOrFlex + " moreCardGap"}>
          {cards}
        </div>
      </div>
    </div>
  );
}

let sections = []
for (const [key, value] of Object.entries(cData.sections)) {
  sections.push(create_section(value, key));
}

const Career = () => {
  return (
    <div>
      <div className={style.topSection}>
        <div className={style.descHolder}>
          <Markdown>{cData.overview}</Markdown>
        </div>
        <div className={style.bHolder}>
          <div className={style.button}>
            <NavButton name="Resume" link={cData.resume} />
          </div>
        </div>
      </div>
      {sections}
    </div>
  );
};

export default Career;
