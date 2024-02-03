import React, { useState } from "react";
import ProjectCard from "../Components/Project";
import Mosaic from "../Components/Mosaic";

import style from "./work.module.css";
import Category from "../Components/Category";
import Markdown from "react-markdown";

import workData from "../data/projects.json";

const categories = workData["categories"];
const projects = workData["projects"];

function arrayIntersect(a1, a2) {
  return a1.filter(function (e) {
    return a2.indexOf(e) > -1;
  });
}

const Work = () => {
  const [selCats, setSelCats] = useState([]);

  function selectCat(name) {
    let catsCopy = [...selCats];
    let index = catsCopy.indexOf(name);
    if (index === -1) {
      catsCopy.push(name);
    } else {
      catsCopy.splice(index, 1);
    }
    setSelCats(catsCopy);
  }

  let cats = [];
  for (var i = 0; i < categories.length; i++) {
    let im = categories[i]["image"];
    let name = categories[i]["name"];
    cats.push(
      <Category
        key={i}
        width="200px"
        height="300px"
        image={im}
        catName={name}
        onClick={() => {
          selectCat(name);
        }}
        isSelected={selCats.includes(name)}
      />
    );
  }

  let projs = [];
  for (const [key, value] of Object.entries(projects)) {
    var currentProject = value;
    if (
      selCats.length === 0 ||
      arrayIntersect(currentProject["categories"], selCats).length === selCats.length
    ) {
      projs.push(<div key={key} className={style.spacer}>
        <ProjectCard width="600px" pName={key} data={currentProject}/>
      </div>);
    }
  }

  return (
    <div>
      <div className={style.descHolder}>
        <Markdown>{workData.description}</Markdown>
      </div>
      <Mosaic>
        <div className={style.catHolder + " " + style.fade}>{cats}</div>
      </Mosaic>
      <div className={style.proHolder}>
        <div className={style.gridOrFlex}>{projs}</div>
      </div>
    </div>
  );
};

export default Work;
