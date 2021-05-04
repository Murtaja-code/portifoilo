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
	ThemeProvider,
	useMediaQuery
} from "@material-ui/core"
import projects from "../../constData"
import useStyles, { theme } from "./Style"
import Bounce from "react-reveal/Bounce"
import Fade from "react-reveal/Fade"
import Carousel from "react-material-ui-carousel"

function Work() {
	const classes = useStyles()
	const mobile = useMediaQuery("(max-width: 700px)")

	const cards = (project, delay) => {
		return (
			<Fade left delay={delay ? project.delay : 0}>
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
						<a target="_blank" rel="noreferrer" href={project.link} className={classes.link}>
							<Button variant="contained" size="small" color="primary">
								Preview
							</Button>
						</a>
						<a target="_blank" rel="noreferrer" href={project.repo} className={classes.link}>
							<Button variant="contained" size="small" color="primary">
								Repo
							</Button>
						</a>
					</CardActions>
					<div>
						<Grid container justify="center" alignContent="center" className="hidden">
							{project.tools.map((tool, i) => (
								<Bounce key={i}>
									<Button className={classes.tools} size="small" color="primary" variant="outlined">
										{tool}
									</Button>
								</Bounce>
							))}
						</Grid>
					</div>
				</Card>
			</Fade>
		)
	}
	return (
		<Container>
			<ThemeProvider theme={theme}>
				<Box mt={12} className={classes.overflow}>
					<Typography className={classes.topText} variant="h4">
						<Bounce left cascade>
							My Latest projects
						</Bounce>
					</Typography>

					{!mobile ? (
						<Grid container spacing={3} justify="center" alignItems="center">
							{projects.map((project, i) => (
								<Grid item xs={12} sm={6} md={4} lg={3} key={i}>
									{cards(project, true)}
								</Grid>
							))}
						</Grid>
					) : (
						<Carousel
							navButtonsAlwaysVisible
							navButtonsProps={{
								style: {
									backgroundColor: "cornflowerblue",
									padding: "4px"
								}
							}}>
							{projects.map((project, i) => (
								<div key={i}>{cards(project, false)}</div>
							))}
						</Carousel>
					)}
				</Box>
			</ThemeProvider>
		</Container>
	)
}

export default Work
