import React from "react";
import "../assets/styles/MainCard.css";
const TagList = ({bakery}) => {
    console.log("Rendering bakery:", bakery);
    console.log("Keywords:", bakery.keywords);
    
    return (
        <div>
            {bakery.keywords.map((tag) => (
                <span className="tag">{tag}</span>
            ))}
        </div>
    )
}

export default TagList;