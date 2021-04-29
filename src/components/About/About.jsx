import React from "react"
import { Box, Typography, Container, Grid } from "@material-ui/core"
import Bounce from "react-reveal/Bounce"
import useStyles from "./Style"
import django from "../../assets/django.svg"
import flask from "../../assets/flask.svg"
import material from "../../assets/material.svg"
import vuebootstrap from "../../assets/vuebootstrap.svg"
import git from "../../assets/git.svg"
import redux from "../../assets/redux.svg"
import reactb from "../../assets/reactb.js"
import typescript from "../../assets/typescript.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faPython,
	faHtml5,
	faCss3,
	faJs,
	faReact,
	faVuejs,
	faBootstrap
} from "@fortawesome/free-brands-svg-icons"
const languages = [
	{ icon: faPython, name: "PYTHON", color: "306998", delay: 100 },
	{ icon: faHtml5, name: "HTML5", color: "#e34f26", delay: 200 },
	{ icon: faCss3, name: "CSS3", color: "#264de4", delay: 300 },
	{ icon: faJs, name: "JAVASCRIPT", color: "#f0db4f", delay: 400 },
	{ icon: typescript, name: "TYPESCRITP", color: "", delay: 300 }
]

const frameworks = [
	{ icon: faReact, name: "REACT", color: "#00d8ff", delay: 100 },
	{ icon: redux, name: "REDUX", color: "#00d8ff", delay: 100 },
	{ icon: reactb, name: "React-bootstrap", color: "#f0db4f", delay: 400 },
	{ icon: material, name: "MATERIAL UI", color: "#f0db4f", delay: 400 },
	{ icon: faVuejs, name: "VUE", color: "#42b883", delay: 200 },
	{ icon: vuebootstrap, name: "Vue-bootstrap", color: "", delay: 300 },
	{ icon: faBootstrap, name: "BOOTSTRAP", color: "#7952b3", delay: 300 },
	{ icon: django, name: "DJNAGO", color: "#f0db4f", delay: 400 },
	{ icon: flask, name: "FLASK", color: "#f0db4f", delay: 400 },
	{ icon: git, name: "GIT", color: "#f0db4f", delay: 400 }
]

function About() {
	const classes = useStyles()
	const topText = (text, delay) => {
		return (
			<Typography className={classes.topText} variant="h4">
				<Bounce delay={delay} left cascade>
					{text}
				</Bounce>
			</Typography>
		)
	}
	return (
		<Container>
			<Box pt={20}>
				{/* languages*/}
				{topText("Languages I speak", 500)}
				<Grid container justify="center" spacing={2}>
					{languages.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3}>
							<Typography variant="h6" style={{ color: "#8a8a8a" }}>
								{icon.name}
							</Typography>
							{icon.name !== "TYPESCRITP" ? (
								<FontAwesomeIcon icon={icon.icon} size="6x" style={{ color: icon.color }} />
							) : (
								<object
									data={typescript}
									type="image/svg+xml"
									width="95px"
									height="95px"
									alt="dd"
								/>
							)}
						</Grid>
					))}
				</Grid>
				{/* frameworks */}
				<Box mt={4}>{topText("Tools I use", 500)}</Box>
				<Grid container justify="center" spacing={2}>
					{frameworks.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3}>
							<Typography variant="h6" style={{ color: "#8a8a8a" }}>
								{icon.name}
							</Typography>
							{(icon.name === "VUE") | (icon.name === "REACT") | (icon.name === "BOOTSTRAP") ? (
								<FontAwesomeIcon icon={icon.icon} size="6x" style={{ color: icon.color }} />
							) : (
								<span>
									{icon.name !== "REACT-BOOTSRAP" ? (
										<object
											data={icon.icon}
											type="image/svg+xml"
											width="95px"
											height="95px"
											alt="dd"
										/>
									) : (
										<img src={icon.icon} alt="d" width="95px" height="95px" />
									)}
								</span>
							)}
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	)
}

export default About
