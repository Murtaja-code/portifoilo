import React from "react"
import {
	Button,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Typography,
	Box,
	Container,
	CardMedia,
	ThemeProvider
} from "@material-ui/core"
import projects from "../../constData"
import useStyles, { theme } from "./Style"
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"

function Work() {
	const classes = useStyles()
	return (
		<Container>
			<ThemeProvider theme={theme}>
				<Box mt={12} style={{ overflow: "hidden" }}>
					<Typography className={classes.topText} variant="h4">
						<Bounce left cascade>
							My Latest projects
						</Bounce>
					</Typography>

					<Grid container spacing={3} justify="center" alignItems="center">
						{projects.map((project, i) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
								<Fade left delay={project.delay}>
									<Card className={classes.card}>
										<CardActionArea className="card">
											<CardMedia component="img" src={project.img} alt="ll" />
											<CardContent className="card">
												<Typography gutterBottom variant="h5" component="h2">
													{project.title}
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													{project.descrption}
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<a href={project.link} className={classes.link}>
												<Button variant="contained" size="small" color="primary">
													Live
												</Button>
											</a>
											<a href={project.repo} className={classes.link}>
												<Button variant="contained" size="small" color="primary">
													Repo
												</Button>
											</a>
										</CardActions>
										<div>
											<Grid container justify="center" alignContent="center" className="hidden">
												{project.tools.map((tool, i) => (
													<Bounce key={i}>
														<Button
															className={classes.tools}
															size="small"
															color="primary"
															variant="outlined">
															{tool}
														</Button>
													</Bounce>
												))}
											</Grid>
										</div>
									</Card>
								</Fade>
							</Grid>
						))}
					</Grid>
				</Box>
			</ThemeProvider>
		</Container>
	)
}

export default Work
