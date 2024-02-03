import React from "react";
import style from "./LRText.module.css"

const LRText = (props) => {
    return (
        <div className={style.parent}>
            <p>{props.leftText}</p>
            <p className={style.right}>{props.rightText}</p>
        </div>
    )
}

export default LRText;