import React from "react";
import Header from "./Header";

function Description(props) {
    return(
        <div ref={props.ref} className="description">
            <Header img={props.img} name={props.name} />
            {props.name}
        </div>
    )
}

export default Description;