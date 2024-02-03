import React from "react";
import style from "./Project.module.css";
import ImageDisplay from "./ImageDisplay";
import LRText from "./LRText";
import NavButton from "./NavButton";

import CardWrapper from "./CardWrapper";

import abbrs from "../data/categoryAbbreviations.json";

const ProjectCard = (props) => {
  const height = props.height ? props.height : "300px";
  const width = props.width ? props.width : "";

  const projectData = props.data;

  let catsText = "";
  var c;
  for (c of projectData.categories) {
    catsText += (abbrs[c] ? abbrs[c] : c) + " / ";
  }
  catsText = catsText.substring(0, catsText.length - 3);

  return (
    <CardWrapper width={width} height={height}>
      <div className={style.pContainer}>
        <div className={style.imgContainer}>
          <ImageDisplay imgs={projectData.images} />
        </div>
        <div className={style.notImgContainer}>
          <div className={style.content}>
            <div className={style.lr}>
              <LRText leftText={projectData.dates} rightText={catsText} />
            </div>
            <div className="hideScroll" style={{width: "100%", overflow: "auto"}}>
              <h1 className={style.title}>{projectData.title}</h1>
            </div>
            <div className={style.main}>{projectData.tagline ? projectData.tagline : (projectData.desc.split(".")[0] + ".")}</div>
            <div className={style.footer}>
              <NavButton name="View More" link={`/projects/${props.pName}`} />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
