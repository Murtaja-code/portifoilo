import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import src from "../Images/imge2.png"
import "./style.css"
function Intro() {
	return (
		<div>
			<Container fluid="md" className="text-center" id="home">
				<Row>
					<Col className="text-center my-auto intro-font-size intro-font">
						<Fade left>
							<div>
								<span className="f-trans f-hi">Hi, </span>
								<br />
								<span className="f-trans f-my">My name is Murtaja,</span> <br />
								<span className="f-trans f-i">
									I am a full stack web developer, I enjoy learning new things,
									building things and helping others.
								</span>
							</div>
						</Fade>
						<Fade right>
							<Image
								className="mt-5 dance"
								width="40%"
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
