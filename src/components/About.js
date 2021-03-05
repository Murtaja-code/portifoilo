import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import "./style.css"
import Fade from "react-reveal/Fade"
function About() {
	return (
		<Container className="margin-top" id="about">
			<h3 align="left" className="mb-4 f-title">
				About
			</h3>
			<Row>
				<Col xs={12} md={6}>
					<Fade left>
						<Card border="white" className="mb-3 about-me-card-h about-me-col">
							<Card.Body>
								<Card.Title className="f-card-title f-card-col">
									About me
								</Card.Title>
								<Card.Text className="f-card-title">
									I am Murtaja Adnan, graduated from Baghdad Oil Traning
									Institute with diploma, but my love goes to computer science
									and web development particularly. I like designing things and
									making them alive in the browser. <br />
									Helping others is a great deal of importance to me. <br />
									I beleive in equality between races, genders.
									<br /> Besides I am a bodybuilder who loves traning very much
									and it is a part of my life.
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
				</Col>
				<Col>
					<Row>
						<Col xs={12}>
							<Fade right>
								<Card border="white" className="pf-card-h mb-3 about-me-col">
									<Card.Body>
										<Card.Title className="f-card-title f-card-col">
											Projects and opportunities I'm interested in
										</Card.Title>
										<Card.Text className="f-card-title">
											1.porjects that make real change in life.
											<br />
											2.Buiding APIS.
											<br />
											3.Building frontend web apps.
										</Card.Text>
									</Card.Body>
								</Card>
							</Fade>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Fade right>
								<Card border="white" className="pf-card-h about-me-col">
									<Card.Body>
										<Card.Title className="f-card-title f-card-col">
											languages and frameworks
										</Card.Title>
										<Card.Text className="mt-2 mb-5" className="f-card-title">
											python and django framework.
										</Card.Text>
										<Card.Text className="f-card-title">
											HTML, CSS, JS, vue.js and react.js framworks.
										</Card.Text>
									</Card.Body>
								</Card>
							</Fade>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default About
