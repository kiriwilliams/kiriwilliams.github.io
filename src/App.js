import React, { Component } from 'react';
import './App.css';
import Portfolio from "./components/Portfolio/portfolio";
import Nav from "./components/Nav/nav";


// {
//   id: 
//   name: 
//   github: 
//   live: 
//   tech: [],
//   summary: []
//   type: 
//   role: [],
//   img: 
// }

const firebase = {
  name: "firebase",
  logo: "./img/firebase.png"
};
const javascript = {
  name: "javascript",
  logo: "./img/javascript.png"
};
const bootstrap = {
  name: "bootstrap",
  logo: "./img/bootstrap.png"
};
const mongoDB = {
  name: "mongoDB",
  logo: "./img/mongo.png"
};
const SQL = {
  name: "SQL",
  logo: "./img/mysql.svg"
};
const react = {
  name: "react",
  logo: "./img/react.png"
};
const heroku = {
  name: "heroku",
  logo: "./img/heroku.png"
};
const express = {
  name: "express",
  logo: "./img/express.png"
}
const node = {
  name: "node",
  logo: "./img/node.png"
}
const html = {
  name: "html",
  logo: "./img/html.png"
}
const css = {
  name: "css",
  logo: "./img/css.png"
}

const projects = [
  {
    id: "emu",
    name: ["EMU"],
    github: "https://github.com/kiriwilliams/emu-app",
    live: "https://emu-journal.herokuapp.com/",
    tech: [javascript, mongoDB, react, heroku, html, css],
    summary: [<p>EMU (emotion, mood, understanding) is a journaling webapp that allows users to track their mood over time through both color and languge. </p>],
    type: "group",
    role: ""
  },
  {
    id: "daytripper",
    name: ["Daytripper"],
    github: "https://github.com/kiriwilliams/Day-Tripper",
    live: "https://mattwills09.github.io/Day-Tripper/",
    tech: [firebase, javascript, html, css],
    summary: [<p>Daytripper was developed to make last minute plans a breeze. Users just need to enter their zipcode, and Daytripper will give a weather forecast and recommended activities for the day. After selecting which activities interest them, users are presented with a list of related establishments in the area along with their address, phone number, and link to the yelp listing.</p>],
    type: "group",
    role: ["",<p>Front end: Styling on login page, form validation, styling for buttons, loading animation, logic for selecting multiple interests</p>,<p>Middleware: API calls</p>,<p><small><strong>Note:</strong> Due to limitations of the free yelp API, queries are rate limited and may be slow.</small></p>
    ],
    img: "./img/daytripper-1.png"

  },
  {
    id: "fight",
    name: "After Skool Fite Club",
    github: "https://github.com/kiriwilliams/After-Skool-Fite-Club",
    live: "https://kiriwilliams.github.io/After-Skool-Fite-Club/",
    tech: [bootstrap,javascript, html, css],
    summary: [],
    type: "solo",
    role: [],
    img: "./img/asfc.png"
  },
  {
    id: "memory",
    name: "Pokemon Memory Game",
    github: "https://github.com/kiriwilliams/pokemon-memory-game",
    live: "https://kiriwilliams.github.io/pokemon-memory-game/",
    tech: [react, javascript, html, bootstrap],
    summary: [],
    type: "solo",
    role: [],
    img: ""
  },
{
  id: "cooking",
  name: "Top Chef RPG",
  github: "https://github.com/kiriwilliams/Top-Chef-RPG",
  live: "https://top-chef-rpg.herokuapp.com/",
  tech: [SQL,heroku, express, javascript, html, css],
  summary: [],
  type: "group",
  role: [],
  img: "",
},
{
  id: "quiz",
  name: "Honey Bee Quiz",
  github: "https://github.com/kiriwilliams/Honey-Bee-Quiz",
  live: "https://kiriwilliams.github.io/Honey-Bee-Quiz/",
  tech: [javascript, html, css],
  summary: [],
  type: "solo",
  role: [],
  img: ""
},
{
  id: "hangman",
  name: "Word Guess Game",
  subtitle: "(Who's that Pokemon?)",
  github: "",
  live: "",
  tech: [html, css, javascript],
  summary: "",
  type: "solo",
  role: "Full Stack",
  img: "./img/word-guess-game.png"
},
{
  id: "liri",
  name: "Liri Node Application",
  github: "https://github.com/kiriwilliams/liri-node-app",
  live: "",
  tech: [node],
  summary: [],
  type: "solo",
  role: [],
  img: ""
},
{
  id: "bamazon",
  name: "Bamazon",
  github: "https://github.com/kiriwilliams/bamazon",
  live: "",
  tech: [node],
  summary: [],
  type: "solo",
  role: [],
  img: ""
}
]
const menuButton = "menu-toggle";
const menuButtonHide = menuButton + " hidden";
const openMenu = "open menu";
const closeMenu = "close menu";

class App extends Component {
  state = {
    smallScreen: false,
    menuOpen: true,
    focusedProject: ""
  }

   componentDidMount = () => {
    this.responsiveMenu();
     window.addEventListener('resize', this.responsiveMenu);

   }

  responsiveMenu = () => { 
    if(window.innerWidth <= 640){
      this.setState({smallScreen: true, menuOpen: false});

    }
    else{
      this.setState({smallScreen: false, menuOpen: true});
    }
  }

  toggleMenu = () => {
    this.state.menuOpen ? this.setState({ menuOpen: false }) :  this.setState({ menuOpen: true });
  }

  selectProject = (project) => {
    console.log(project);
    this.setState({focusedProject: project});
  }


  render() {
    return (
      <div>
        <header>
          <button type="button" id="menu-toggle" className={window.innerWidth >= 640 ? menuButtonHide : menuButton} onClick={this.toggleMenu} aria-label="Open menu">
            <span className="sr-only">Open menu</span>
            <span className="fa fa-bars" aria-hidden="true">{this.state.menuOpen ? closeMenu : openMenu }</span>
          </button>

          <h1 id="logo">
            <a href="index.html">KIRA WILLIAMS</a>
          </h1>
        </header>
        <Nav menuOpen={this.state.menuOpen} />
        
        <main>
          <Portfolio projects={projects} selectProject={this.selectProject} focusedProject={this.state.focusedProject} />
        </main>
      </div>
    )
  }
}

export default App;
