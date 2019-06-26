import React from "react";


function Header(props) {
    const alt = "Image of " + props.name + " website";

    return(
        <div class="macro-header">
            <h2>{props.project.name}</h2>
            <div className="margin-top"><a>View Code</a> | <a>Visit Live Site</a></div>
        </div>

    )
}

export default Header;