import {
	faPython,
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faVuejs,
	faBootstrap
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import django from "../../assets/django.svg"
import flask from "../../assets/flask.svg"
import material from "../../assets/material.svg"
import vuebootstrap from "../../assets/vuebootstrap.svg"
import git from "../../assets/git.svg"
import redux from "../../assets/redux.svg"
import reactb from "../../assets/reactb.js"
import typescript from "../../assets/typescript.svg"
import postgres from "../../assets/postgres.svg"

export const languages = [
	{ icon: faPython, name: "PYTHON", color: "306998", delay: 100 },
	{ icon: faJs, name: "JAVASCRIPT", color: "#f0db4f", delay: 150 },
	{ icon: typescript, name: "TYPESCRITP", color: "", delay: 200 },
	{ icon: faHtml5, name: "HTML5", color: "#e34f26", delay: 250 },
	{ icon: faCss3, name: "CSS3", color: "#264de4", delay: 300 },
	{ icon: postgres, name: "POSTGRES", color: "#e34f26", delay: 350 },
	{ icon: faDatabase, name: "SQL", color: "#0048BA", delay: 400 }
]

export const frameworks = [
	{ icon: faReact, name: "REACT", color: "#00d8ff", delay: 450 },
	{ icon: redux, name: "REDUX", color: "#00d8ff", delay: 500 },
	{ icon: reactb, name: "React-bootstrap", color: "#f0db4f", delay: 550 },
	{ icon: material, name: "MATERIAL UI", color: "#f0db4f", delay: 600 },
	{ icon: faVuejs, name: "VUE", color: "#42b883", delay: 650 },
	{ icon: vuebootstrap, name: "Vue-bootstrap", color: "", delay: 700 },
	{ icon: faBootstrap, name: "BOOTSTRAP", color: "#7952b3", delay: 750 },
	{ icon: django, name: "DJNAGO", color: "#f0db4f", delay: 800 },
	{ icon: flask, name: "FLASK", color: "#f0db4f", delay: 500 },
	{ icon: git, name: "GIT", color: "#f0db4f", delay: 500 }
]
