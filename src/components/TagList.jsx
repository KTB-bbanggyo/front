import React from "react";

const TagList = ({bakery}) => {
    // console.log(dummy);
    return (
        <div className="bakery-tags">
            {bakery.tags.map((tag) => (
                <span className="tag">{tag}</span>
            ))}
        </div>
    )
}

export default TagList;