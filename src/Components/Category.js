import React, { useState } from "react";
import CardWrapper from "./CardWrapper";
import style from "./Category.module.css"; 

const Category = (props) => {

  const [ isSelected, setIsSelected ] = useState(props.isSelected);

  const handleClick = () => {
    props.onClick();
    setIsSelected(!isSelected);
  }

  const blur = isSelected ? " " + style.blur : "";
  const hideTitle = isSelected ? " " + style.hideTitle : "";

  return (
    <div className={style.parent}>
      <CardWrapper width={props.width} height={props.height}>
        <div className={style.button} onClick={handleClick}>
          <div className={style.titleContainer + blur}>
            <h2 className={style.title + hideTitle}>{props.catName}</h2>
          </div>
          <img className={isSelected ? "" : style.hide} src={props.image} alt=""/>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Category;
