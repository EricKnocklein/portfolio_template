import React from "react";
import { useParams } from "react-router-dom";

import style from "./project.module.css";
import ImageDisplay from "../Components/ImageDisplay";
import Mosaic from "../Components/Mosaic";
import NavButton from "../Components/NavButton";
import CardWrapper from "../Components/CardWrapper";
import ReactMarkdown from "react-markdown";

import { Navigate } from "react-router-dom";

import workData from "../data/projects.json";

const ProjectPage = () => {
  let { projectId } = useParams();
  const projectData = workData.projects[projectId];

  if (!projectData) return (<Navigate to='/projects' replace />)

  let nav = <hr></hr>;
  if (projectData.link) {
    nav = (
      <div className={style.mHolder}>
        <Mosaic>
          <div className={style.cHolder}>
            <CardWrapper width="120px">
              <NavButton name="Visit" link={projectData.link} />
            </CardWrapper>
          </div>
        </Mosaic>
      </div>
    );
  }

  return (
    <div className={style.pContainer}>
      <div className={style.imgContainer}>
        <ImageDisplay caption={true} imgs={projectData.images} />
      </div>
      <div className={style.notImgContainer}>
        <div className={style.content}>
          <div
            className={"hideScroll " + style.title}
            style={{ width: "100%", overflow: "auto" }}
          >
            <h1 className={style.title}>{projectData.title}</h1>
          </div>
          <div className={style.date}>
            <p>{projectData.dates}</p>
          </div>
          {nav}
          <div className={style.main}>
            <ReactMarkdown>{projectData.desc}</ReactMarkdown>
          </div>
          <Mosaic></Mosaic>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
