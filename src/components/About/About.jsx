import React from "react"
import { Box, Typography, Container, Grid } from "@material-ui/core"
import Bounce from "react-reveal/Bounce"
import useStyles from "./Style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Zoom from "react-reveal/Zoom"
import { languages, frameworks } from "./Data"

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
			<Box pt={10}>
				{/* languages*/}
				{topText("Languages I speak", 100)}
				<Grid container justify="center" spacing={2}>
					{languages.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3} className={classes.scale}>
							<Zoom delay={icon.delay}>
								<div>
									<Typography variant="h6" className={classes.mainColor}>
										{icon.name}
									</Typography>
									{icon.name === "TYPESCRITP" || icon.name === "POSTGRES" ? (
										<object
											data={icon.icon}
											type="image/svg+xml"
											width="95px"
											height="95px"
											alt="dd">
											dddd
										</object>
									) : (
										<FontAwesomeIcon icon={icon.icon} size="6x" style={{ color: icon.color }} />
									)}
								</div>
							</Zoom>
						</Grid>
					))}
				</Grid>
				{/* frameworks */}
				<Box mt={4}>{topText("Tools I use", 600)}</Box>
				<Grid container justify="center" spacing={2}>
					{frameworks.map((icon, i) => (
						<Grid key={i} item xs={6} sm={4} md={3} className={classes.scale}>
							<Zoom delay={icon.delay}>
								<div>
									<Typography variant="h6" className={classes.mainColor}>
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
								</div>
							</Zoom>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	)
}

export default About
