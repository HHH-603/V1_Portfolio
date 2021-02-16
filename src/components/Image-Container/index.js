import React from "react";
import "./style.css";

const ImageContainer = (props) => {
    return (
        <div className="image-container">{props.children}</div>
    );
};

export default ImageContainer;