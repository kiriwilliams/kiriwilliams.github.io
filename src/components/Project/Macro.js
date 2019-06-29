import React from "react";
import Tech from "./Tech";
import Header from "./Header";


function Macro(props) {
    const id = props.id + "-macro";
    const alt = "Image of " + props.id + " website";
    return (
        <div data-project={props.id} id={id} className="macro">
            <Header project={props.project} />
            {/* <h2>{props.project.name}</h2> */}
            <div className="macro-body">
                <div className="specs">
                    <span className="subtitle">{props.subtitle}</span>
                    <h3 className="margin-top">Technologies</h3>
                    {/* {props.tech[0]} */}
                    <p className="tech-tags">
                        {props.tech.map(tech => {
                            return <Tech theme={props.theme} key={tech.name} logo={tech.logo} alt={tech.name} title={tech.name} />
                        })}
                    </p>

                    <h3>Project Type</h3>
                    {props.type}
                    <h3>Role</h3>
                    {props.role}
                    {/* <h3>Features</h3> */}
                </div>
                <div className="summary">
                    <img src={props.img} alt={alt} className="project-image"></img>
                    {/* {props.summary} */}
                </div>
            </div>

        </div>
    )
}

export default Macro;