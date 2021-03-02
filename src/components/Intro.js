import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import src from "../Images/1.jpg"
import "./style.css"
function Intro() {
	return (
		<div>
			<Container fluid="md">
				<Row>
					<Col xs={12} md={6} className="text-center my-auto intro-font-size">
						Hi, <br /> My name is Murtaja, <br />I am a full stack web
						deleloper, <br />I love learning new things, building
						<br /> things and helping others.
						<br /> currently living in Iraq, Maysan.
					</Col>

					<Col xs={12} md={6}>
						<Image
							className="intro-shadow"
							src={src}
							roundedCircle
							width="300"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Intro
