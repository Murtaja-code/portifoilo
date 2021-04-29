import {
	faPython,
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faVuejs,
	faBootstrap
} from "@fortawesome/free-brands-svg-icons"
import django from "../../assets/django.svg"
import flask from "../../assets/flask.svg"
import material from "../../assets/material.svg"
import vuebootstrap from "../../assets/vuebootstrap.svg"
import git from "../../assets/git.svg"
import redux from "../../assets/redux.svg"
import reactb from "../../assets/reactb.js"
import typescript from "../../assets/typescript.svg"

export const languages = [
	{ icon: faPython, name: "PYTHON", color: "306998", delay: 400 },
	{ icon: faJs, name: "JAVASCRIPT", color: "#f0db4f", delay: 600 },
	{ icon: typescript, name: "TYPESCRITP", color: "", delay: 800 },
	{ icon: faHtml5, name: "HTML5", color: "#e34f26", delay: 1000 },
	{ icon: faCss3, name: "CSS3", color: "#264de4", delay: 1200 }
]

export const frameworks = [
	{ icon: faReact, name: "REACT", color: "#00d8ff", delay: 1400 },
	{ icon: redux, name: "REDUX", color: "#00d8ff", delay: 1600 },
	{ icon: reactb, name: "React-bootstrap", color: "#f0db4f", delay: 1800 },
	{ icon: material, name: "MATERIAL UI", color: "#f0db4f", delay: 2000 },
	{ icon: faVuejs, name: "VUE", color: "#42b883", delay: 2200 },
	{ icon: vuebootstrap, name: "Vue-bootstrap", color: "", delay: 2400 },
	{ icon: faBootstrap, name: "BOOTSTRAP", color: "#7952b3", delay: 2600 },
	{ icon: django, name: "DJNAGO", color: "#f0db4f", delay: 2800 },
	{ icon: flask, name: "FLASK", color: "#f0db4f", delay: 3000 },
	{ icon: git, name: "GIT", color: "#f0db4f", delay: 3200 }
]
