import React, { Component } from "react";
import Thumb from "../Project/Thumb";
import Description from "../Project/Description";
import Macro from "../Project/Macro";

class Portfolio extends Component {

    renderDescription = () => {
        if(this.props.focusedProject){
            return (
                <Description id={this.props.focusedProject} img={this.props.projects.find(project => project.id === this.props.focusedProject).img} />
            )
        }
    }

    render() {
        return (
            <section>
                <h1 className="heading">Portfolio</h1>
                {/* <div>
                    <ul>
                        <li>Javascript</li>
                        <li>Handlebars</li>
                        <li>React</li>
                    </ul>
                </div> */}

                <div className="container">
                    {/* {this.props.projects.map(project => {
                        return(
                            <Thumb key={project.id} id={project.id} name={project.name} selectProject={this.props.selectProject} />
                        )
                    })} */}
                    {/* {this.renderDescription()} */}

                    {this.props.projects.map(project => {
                        return (
                            <Macro theme={this.props.theme} key={project.id} project={project} id={project.id} name={project.name} summary={project.summary}  tech={project.tech} type={project.type} img={project.img} subtitle={project.subtitle} role={project.role} />
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Portfolio