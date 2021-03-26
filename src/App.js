import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
// import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import a from "./images/personal_pic.jpeg";
import a1 from "./images/Anime4Us/1.png";
import a2 from "./images/Anime4Us/2.png";
import a3 from "./images/Anime4Us/3.png";
import a4 from "./images/Anime4Us/4.png";
import a5 from "./images/Anime4Us/5.png";
import a6 from "./images/Anime4Us/6.png";
import a7 from "./images/Anime4Us/7.png";
import b1 from "./images/break-brick/1.png";
import b2 from "./images/break-brick/2.png";
import c1 from "./images/cdn/1.png";
import c2 from "./images/cdn/2.png";
import c3 from "./images/cdn/3.png";
import d1 from "./images/node farm/1.png";
import d2 from "./images/node farm/2.png";
import d3 from "./images/node farm/3.png";
import d4 from "./images/node farm/4.png";
import d5 from "./images/node farm/5.png";
import e1 from "./images/poke times/1.png";
import e2 from "./images/poke times/2.png";
import e3 from "./images/poke times/3.png";
import e4 from "./images/poke times/4.png";
import f1 from "./images/portflio/1.png";
import f2 from "./images/portflio/2.png";
import f3 from "./images/portflio/3.png";
import f4 from "./images/portflio/4.png";
import f5 from "./images/portflio/5.png";
import f6 from "./images/portflio/6.png";
import f7 from "./images/portflio/7.png";
import f8 from "./images/portflio/8.png";
import g1 from "./images/random password generator/1.png";
import g2 from "./images/random password generator/2.png";
import h1 from "./images/text-utils/1.png";
import h2 from "./images/text-utils/2.png";
import h3 from "./images/text-utils/3.png";
import h4 from "./images/text-utils/4.png";
import i1 from "./images/todo-app/1.png";
import i2 from "./images/todo-app/2.png";
import i3 from "./images/todo-app/3.png";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {
        basic_info: {
          section_name: {
            about: "About",
          },
          description_header: `Kon'nichiwa`,
          description:
            `Myself, Rishabh Sagar. I am a Sophomore at IIT (BHU) Varanasi. My Interest lies in Software Development and Competitive Programming. Currently, I am more focused on Web Development, but  later I am planning to explore the other areas of Software Development`,
          section_name: {
            skills: "Skills",
          },
        },
        projects: [
          {
            title: "Anime4Us",
            images: [a1, a2, a3, a4, a5, a6, a7],
            description: "From databse of over 15000 animes you can search and watch the anime.Animes are also sorted according to Rating,Popularity",
            url: "http://anime4us.herokuapp.com/",
            technologies: [
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },
              {
                name: "React.js",
                class: "devicon-react-original colored",
              },
              {
                name: "Node.js",
                class: "devicon-nodejs-plain colored",
              },
              {
                name: "MongoDB",
                class: "devicon-mongodb-plain colored",
              },
              {
                name: "Express.js",
                class: "devicon-express-original",
              },
              {
                name: "Heroku",
                class: "devicon-heroku-original colored",
              },
            ],
          },
          
          {
            title: "Portfolio in Django",
            images: [f1, f2, f3, f4, f5, f6, f7, f8],
            description: "A Portoflio Build using Django and Bootstrap,We can add skills ,write articles using django admin portal",
            url: "https://rishabhsagar.pythonanywhere.com/",
            technologies: [
              { name: "HTML 5", class: "devicon-html5-plain colored" },
              {
                name: "Bootstrap",
                class: "devicon-bootstrap-plain colored",
              },
              {
                name: "Python",
                class: "devicon-python-plain colored",
              },
              { name: "Django", class: "devicon-django-plain" },
            ],
          },

          

          {
            title: "Node Farm",
            images: [d1, d2, d3, d4, d5],
            description: "A basic Node Project created during learning of Node.js",
            url: "https://github.com/rishabh-sagar/node.js-basic-project",
            technologies: [
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },

              {
                name: "Node.js",
                class: "devicon-nodejs-plain colored",
              },
              { name: "HTML 5", class: "devicon-html5-plain colored" },
            ],
          },

          {
            title: "Break Brick Game",
            images: [b1, b2],
            description: "a Basic game created during learning of Javascript ",
            url: "https://rishabh-sagar.github.io/break-brick-basic-game/",
            technologies: [
              { name: "HTML 5", class: "devicon-html5-plain colored" },
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },
            ],
          },


          {
            title: "Todo's App",
            images: [i1, i2, i3],
            description: "A basic React Todo App in which you can add,remove daily tasks",
            url:
              "https://github.com/rishabh-sagar/react.js-projects/tree/master/todoapp",
            technologies: [
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },
              {
                name: "React.js",
                class: "devicon-react-original colored",
              },
            ],
          },

          

          {
            title: "Poke Times",
            images: [e1, e2, e3, e4],
            description: "A blog React Page created for better understanding of React Router & Higher Order Components",
            url:
              "https://github.com/rishabh-sagar/react.js-projects/tree/master/poketimes",
            technologies: [
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },
              {
                name: "React.js",
                class: "devicon-react-original colored",
              },
              {
                name: "MaterialUI",
                class: "devicon-materialui-plain",
              },
            ],
          },

          

          {
            title: "Random Password Generator",
            images: [g1, g2],
            description: "You can create Random Passwords with option of adding Capital Letters ,Numbers & Punctuations",
            url:
              "https://github.com/rishabh-sagar/DJANGO-random-password-generator",
            technologies: [
              { name: "HTML 5", class: "devicon-html5-plain colored" },

              {
                name: "Python",
                class: "devicon-python-plain colored",
              },
              { name: "Django", class: "devicon-django-plain" },
            ],
          },

          {
            title: "Text Utils",
            images: [h1, h2, h3, h4],
            description: "A basic text utils app Build in Django",
            url: "https://github.com/rishabh-sagar/DJANGO-text-utils",
            technologies: [
              { name: "HTML 5", class: "devicon-html5-plain colored" },

              {
                name: "Python",
                class: "devicon-python-plain colored",
              },
              { name: "Django", class: "devicon-django-plain" },
            ],
          },

          {
            title: "React CDN ",
            images: [c1, c2, c3],
            description: "A very basic React project created for better understanding of Babel and how React Works",
            url:
              "https://github.com/rishabh-sagar/react.js-projects/tree/master/react%20cdn",
            technologies: [
              {
                name: "Javascript",
                class: "devicon-javascript-plain colored",
              },
              {
                name: "React.js",
                class: "devicon-react-original colored",
              },
            ],
          },
          
        ],
      },
      sharedData: {
        basic_info: {
          name: "Rishabh Sagar",
          titles: ['Web Developer','Front End Developer','Backend Developer','Competitive Programmer'],
          image: a,
          social: [
            {
              name: "Github",
              url: "https://github.com/rishabh-sagar",
              class: "fab fa-github",
            },
            {
              name: "Linkedin",
              url: "https://www.linkedin.com/in/rishabh-sagar-b89122157/",
              class: "fab fa-linkedin",
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/sagar.rish/",
              class: "fab fa-instagram",
            },
          ],
        },
        skills: {
          icons: [
            {
              skills: { name: "HTML 5", classE: "devicon-html5-plain colored" },
              i: 1,
            },
            {
              skills: { name: "CSS", classE: "devicon-css3-plain colored" },
              i: 2,
            },
            {
              skills: {
                name: "Javascript",
                classE: "devicon-javascript-plain colored",
              },
              i: 3,
            },
            {
              skills: {
                name: "Python",
                classE: "devicon-python-plain colored",
              },
              i: 10,
            },
            { skills: { name: "C", classE: "devicon-c-plain colored" }, i: 11 },
            {
              skills: {
                name: "C++",
                classE: "devicon-cplusplus-plain colored",
              },
              i: 12,
            },
          ],

          icons2: [
            {
              skills: {
                name: "React.js",
                classE: "devicon-react-original colored",
              },
              i: 4,
            },
            {
              skills: {
                name: "Node.js",
                classE: "devicon-nodejs-plain colored",
              },
              i: 5,
            },
            {
              skills: {
                name: "MongoDB",
                classE: "devicon-mongodb-plain colored",
              },
              i: 6,
            },
            {
              skills: {
                name: "Express.js",
                classE: "devicon-express-original",
              },
              i: 7,
            },
            {
              skills: { name: "Django", classE: "devicon-django-plain" },
              i: 9,
            },
            {
              skills: { name: "Flask", classE: "devicon-flask-original" },
              i: 15,
            },
          ],

          icons3: [
            {
              skills: {
                name: "Bootstrap",
                classE: "devicon-bootstrap-plain colored",
              },
              i: 8,
            },
            {
              skills: {
                name: "MaterialUI",
                classE: "devicon-materialui-plain",
              },
              i: 15,
            },
            {
              skills: {
                name: "Heroku",
                classE: "devicon-heroku-original colored",
              },
              i: 13,
            },
            { skills: { name: "Bash", classE: "devicon-bash-plain" }, i: 14 },
            {
              skills: { name: "NPM", classE: "devicon-npm-original-wordmark" },
              i: 15,
            },
          ],
        },
      },
    };
  }

  componentDidMount() {
    this.loadSharedData();
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />

        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />

        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        {/* <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        /> */}
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
