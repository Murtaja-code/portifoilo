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
import Zoom from "react-reveal/Zoom"

const languages = [
	{ icon: faPython, name: "PYTHON", color: "306998", delay: 400 },
	{ icon: faJs, name: "JAVASCRIPT", color: "#f0db4f", delay: 600 },
	{ icon: typescript, name: "TYPESCRITP", color: "", delay: 800 },
	{ icon: faHtml5, name: "HTML5", color: "#e34f26", delay: 1000 },
	{ icon: faCss3, name: "CSS3", color: "#264de4", delay: 1200 }
]

const frameworks = [
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
				{topText("Languages I speak", 300)}
				<Grid container justify="center" spacing={2}>
					{languages.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3} className={classes.scale}>
							<Zoom delay={icon.delay}>
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
										alt="dd">
										dddd
									</object>
								)}
							</Zoom>
						</Grid>
					))}
				</Grid>
				{/* frameworks */}
				<Box mt={4}>{topText("Tools I use", 1200)}</Box>
				<Grid container justify="center" spacing={2}>
					{frameworks.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3} className={classes.scale}>
							<Zoom delay={icon.delay}>
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
												alt="dd">
												dddd
											</object>
										) : (
											<img src={icon.icon} alt="d" width="95px" height="95px" />
										)}
									</span>
								)}
							</Zoom>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	)
}

export default About
