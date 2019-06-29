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
  logo: [
    "devicon-javascript-plain",
    "devicon-javascript-plain colored"
  ]
};
const bootstrap = {
  name: "bootstrap",
  logo: [
    "devicon-bootstrap-plain",
    "devicon-bootstrap-plain colored"
  ]
};
const mongoDB = {
  name: "mongoDB",
  logo: [
    "devicon-mongodb-plain",
    "devicon-mongodb-plain colored"
  ]
};
const SQL = {
  name: "MySQL",
  logo: [
    "devicon-mysql-plain",
    "devicon-mysql-plain colored"
  ]
};
const react = {
  name: "react",
  logo: [
    "devicon-react-original",
    "devicon-react-original colored"
  ]
};
const heroku = {
  name: "heroku",
  logo: [
    "devicon-heroku-plain",
    "devicon-heroku-plain colored"
  ]
};
const express = {
  name: "express",
  logo: [
    "devicon-express-original",
    "devicon-express-original colored"
  ]
}
const node = {
  name: "node",
  logo: [
    "devicon-nodejs-plain",
    "devicon-nodejs-plain colored"
  ]
}
const html = {
  name: "html",
  logo: [
    "devicon-html5-plain-wordmark",
    "devicon-html5-plain-wordmark colored"
  ]
}
const css = {
  name: "css",
  logo: [
    "devicon-css3-plain-wordmark",
    "devicon-css3-plain-wordmark colored"
  ]
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
    focusedProject: "",
    theme: "light"
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
          <Portfolio theme={this.state.theme} projects={projects} selectProject={this.selectProject} focusedProject={this.state.focusedProject} />
        </main>
      </div>
    )
  }
}

export default App;
