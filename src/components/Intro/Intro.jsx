import React from "react"
import { Box, Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./Style"
import TextyAnim from "rc-texty"
import CV from "../../assets/cv.pdf"
import Zoom from "react-reveal/Zoom"

function Intro() {
	const classes = useStyles()

	return (
		<Box mt={13}>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12}>
					<TextyAnim
						className={classes.name}
						type="mask-top"
						duration={(e) => {
							if (e.index === 2) {
								return 500
							}
							return 1000
						}}
						interval={(e) => {
							if (e.index === 2) {
								return 500
							}
							return e.index * 50
						}}>
						Hi, My name is Murtaja Adnan.
					</TextyAnim>
				</Grid>

				<Grid item xs={11} sm={8} md={7} lg={6}>
					<Typography variant="h6" className={classes.mainColor}>
						<TextyAnim
							type="mask-top"
							duration={(e) => {
								if (e.index === 2) {
									return 100
								}
								return 1000
							}}
							interval={(e) => {
								if (e.index === 2) {
									return 500
								}
								return e.index * 10
							}}>
							I am a detail oriented full stack Web developer who is always up to date with modern
							technologies and with skills in communication and leadership.. I have experience in
							problem-solving, building rest APIs using Django, developing UI and making them alive
							in the browsers using React.js and Vue.js with a background in developing education
							related web applications.
						</TextyAnim>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Zoom delay={3000}>
						<Box pt={1.5} mb={10}>
							<Button className={classes.CvBtn} variant="contained">
								<a href={CV} className={classes.a} download>
									Download my CV
								</a>
							</Button>
						</Box>
					</Zoom>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Intro
