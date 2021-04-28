import React from "react"
import Carousel from "react-material-ui-carousel"
import { Paper, Button, Grid } from "@material-ui/core"

function Work() {
	var items = [
		{
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!"
		},
		{
			name: "Random Name #2",
			description: "Hello World!"
		}
	]

	return (
		<Carousel>
			{items.map((item, i) => (
				<Grid container justify="center" key={i}>
					<Grid item xs={12} md={6}>
						<Paper>
							<h2>{item.name}</h2>
							<p>{item.description}</p>

							<Button className="CheckButton">Check it out!</Button>
						</Paper>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper>
							<h2>{item.name}</h2>
							<p>{item.description}</p>

							<Button className="CheckButton">Check it out!</Button>
						</Paper>
					</Grid>
				</Grid>
			))}
		</Carousel>
	)
}

export default Work
