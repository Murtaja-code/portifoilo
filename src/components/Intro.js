import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import src from "../Images/1.jpg"
import "./style.css"
function Intro() {
	return (
		<div>
			<Container fluid="md" className="text-center" id="home">
				<Row>
					<Col
						xs={12}
						md={6}
						className="text-center my-auto intro-font-size intro-font">
						<Fade left>
							<div>
								<span className="f-trans f-hi">Hi, </span>
								<br />
								<span className="f-trans f-my">My name is Murtaja,</span> <br />
								<span className="f-trans f-i">
									I am a full stack web deleloper,
								</span>
								<br />
								<span className="f-trans f-lo">
									I love learning new things, building
								</span>
								<span className="f-trans f-t">
									<br /> things and helping others.
								</span>
								<span className="f-trans f-c">
									<br /> currently living in Iraq, Maysan.
								</span>
							</div>
						</Fade>
					</Col>
					<Col xs={12} md={6}>
						<Fade right>
							<Image
								className="mt-3 dance"
								width="300"
								src={src}
								roundedCircle
							/>
						</Fade>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Intro
