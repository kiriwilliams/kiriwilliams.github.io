import React from "react";


function Thumb(props) {
    return (
        <div id={props.name} className={"project"} onClick={() => props.selectProject(props.name)}>
            <span className="thumb-title">{props.name}</span>
        </div>
    )

}

export default Thumb;