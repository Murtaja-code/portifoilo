import React from "react"
import Carousel from "react-material-ui-carousel"
import {
	Button,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Typography,
	Box,
	Container
} from "@material-ui/core"
import projects from "../../constData"
import useStyles from "./Style"
function Work() {
	const classes = useStyles()
	return (
		<Container>
			<Box mt={18}>
				<Carousel>
					{projects.map((project, i) => (
						<Grid container justify="center" alignItems="center" key={i}>
							<Grid item xs={12} md={6}>
								<Card>
									<CardActionArea>
										<img src={project.img} height="200" alt="ll" />
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{project.title}
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												{project.descrption}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											<a herf={project.link}>Live</a>
										</Button>
										<Button size="small" color="primary">
											<a herf={project.repo}>Repo</a>
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					))}
				</Carousel>
			</Box>
		</Container>
	)
}

export default Work
