import React from "react"
import { Box, Typography, Container, Grid } from "@material-ui/core"
import Bounce from "react-reveal/Bounce"
import useStyles from "./Style"
import django from "../../assets/django.svg"
import typescript from "../../assets/typescript.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons"
const languages = [
	{ icon: faPython, name: "PYTHON", color: "306998", delay: 100 },
	{ icon: faHtml5, name: "HTML5", color: "#e34f26", delay: 200 },
	{ icon: faCss3, name: "CSS3", color: "#264de4", delay: 300 },
	{ icon: faJs, name: "JAVASCRIPT", color: "#f0db4f", delay: 400 },
	{ icon: typescript, name: "TYPESCRITP", color: "", delay: 300 }
]

function About() {
	const classes = useStyles()
	return (
		<Container maxWidth="sm">
			<Box pt={20}>
				<Typography className={classes.topText} variant="h4">
					<Bounce left cascade>
						Languages I speak
					</Bounce>
				</Typography>
				<Grid container justify="center">
					{languages.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3}>
							<Typography variant="h6" style={{ color: "#8a8a8a" }}>
								{icon.name}
							</Typography>
							{icon.name !== "TYPESCRITP" ? (
								<FontAwesomeIcon icon={icon.icon} size="6x" style={{ color: icon.color }} />
							) : (
								<object data={typescript} type="image/svg+xml" width="95px" height="95px" />
							)}
						</Grid>
					))}
				</Grid>
			</Box>
			{/* <object data={typescript} type="image/svg+xml" width="20%" /> */}
		</Container>
	)
}

export default About
