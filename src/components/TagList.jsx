import React from "react";
import "../assets/styles/MainCard.css";
const TagList = ({bakery}) => {
    // console.log(dummy);
    return (
        <div>
            {bakery.tags.map((tag) => (
                <span className="tag">{tag}</span>
            ))}
        </div>
    )
}

export default TagList;