// Filename - pages/index.js

import React from "react";
import style from "./index.module.css";
import Mosaic from "../Components/Mosaic";
import CardWrapper from "../Components/CardWrapper";
import Markdown from "react-markdown";
import ImageDisplay from "../Components/ImageDisplay";

import aboutData from "../data/about.json";

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%"
}

const Home = () => {
  return (
    <div>
      <div className={style.topSection}>
        <div className={style.imgCont}>
          <ImageDisplay imgs={aboutData.images} />
        </div>
        <div className={style.descHolder}>
          <div className={style.content}>
            <h1>Welcome!</h1>
            <Markdown>{aboutData.description}</Markdown>
          </div>
        </div>
      </div>
      <Mosaic>
        <div className={style.catHolder + " " + style.fade}>
          <CardWrapper width="50%" hover="none">
            <h1 className={style.linksTitle}>Links</h1>
          </CardWrapper>
        </div>
      </Mosaic>
      <div className={style.proHolder}>
        <div className={style.gridOrFlex}>
          <CardWrapper
            width="200px"
            height="300px"
            onClick={() => {
              window.location = "/career";
            }}
          >
            <div style={centerStyle}>
              <h1 className={style.linksTitle}>Career</h1>
            </div>
          </CardWrapper>
          <CardWrapper
            width="200px"
            height="300px"
            onClick={() => {
              window.location = "/projects";
            }}
          >
            <div style={centerStyle}>
              <h1 className={style.linksTitle}>Projects</h1>
            </div>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default Home;
