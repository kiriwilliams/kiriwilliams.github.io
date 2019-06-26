import React, { Component } from "react";

const menu = "menu clearfix";
const menuHide = "menu clearfix hidden"
class Nav extends Component {
    state = {
    }


    render() {
        return (
            <nav id="menu" className={this.props.menuOpen ? menu : menuHide} aria-label="Menu">
                <ul>

                    <li className="float-left">
                        <button type="button" className="menu-btn"><a>About</a></button>
                        <div className="menu-btn-highlight"></div>
                    </li>
                    <li className="float-left">
                        <button type="button" className="menu-btn">Portfolio</button>
                        <div className="menu-btn-highlight"></div>
                    </li>
                    <li className="float-left">
                        <button type="button" className="menu-btn">Contact</button>
                        <div className="menu-btn-highlight"></div>
                    </li>

                    <li className="float-right">
                        <button type="button" className="menu-btn"><a href="https://www.linkedin.com/in/kira-williams/" target="_blank">linkedin</a></button>
                        <div className="menu-btn-highlight"></div>
                    </li>
                    <li className="float-right">
                        <button type="button" className="menu-btn"><a href="https://github.com/kiriwilliams" target="_blank">github</a></button>
                        <div className="menu-btn-highlight"></div>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Nav;