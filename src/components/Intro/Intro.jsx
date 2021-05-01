import React from "react"
import { Box, Typography, Grid, Button } from "@material-ui/core"
import useStyles from "./Style"
import TextyAnim from "rc-texty"
import CV from "../../assets/cv.pdf"
import Zoom from "react-reveal/Zoom"

function Intro() {
	const classes = useStyles()

	return (
		<Box mt={27}>
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
								return e.index * 20
							}}>
							I am a full-stack Web Developer passionate about web development and striving to make
							an impact on what I work on. Well-versed in modern JavaScrip frameworks.
						</TextyAnim>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Zoom delay={3000}>
						<Box pt={1.5}>
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
