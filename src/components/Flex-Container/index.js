import React from "react";
import "./style.css";

const FlexContainer = (props) => {
    return (
        <main className="flex-container">{props.children}</main>
    );
};

export default FlexContainer;