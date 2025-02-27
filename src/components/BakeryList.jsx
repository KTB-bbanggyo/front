import React from "react";
// import dummy from "../assets/dummy.json";

const BakeryList = ({bakery}) => {
    // console.log(dummy);
    return (
        <div className="bakery-tags">
            {bakery.tags.map((tag) => (
                <span className="tag">{tag}</span>
            ))}
        </div>
    )
}

export default BakeryList;