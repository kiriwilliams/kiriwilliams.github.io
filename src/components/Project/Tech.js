import React from "react";

function Tech(props) {
    return(
        <i class={props.theme==="light" ? props.logo[1] : props.logo[0]} title={props.title}></i>
        // <img src={props.src} alt={props.alt} title={props.title}></img>
    )
}
export default Tech;