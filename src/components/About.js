import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import "./style.css"
import Fade from "react-reveal/Fade"
function About() {
	return (
		<Container className="margin-top" id="about">
			<h3 align="left" className="mb-4">
				About
			</h3>
			<Row>
				<Col xs={12} md={6}>
					<Fade left>
						<Card border="success" className="mb-3 about-me-card-h">
							<Card.Body>
								<Card.Title>About me</Card.Title>
								<Card.Text>
									Life is my favorite art project. Whether I'm working with a
									world-class team building a complex application, creating
									funky illustrations, or designing my home office, I see
									everything I do as an opportunity for authentic creative
									self-expression. If you're feeling that vibe, we'll get along!
									I live a moderately nomadic lifestyle and prefer to move with
									the sun. My perfect life includes a house within walking
									distance to a nice beach with waves, freedom to work where and
									when I like, and a like-minded tribe of people surrounding me.
									nomadic lifestyle and prefer to move with the sun. My perfect
									life includes a house within walking distance to a nice beach
									with waves, freedom to work where and when I like, and a
									like-minded tribe of people surrounding me.
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
				</Col>
				<Col>
					<Row>
						<Col xs={12}>
							<Fade right>
								<Card border="success" className="pf-card-h mb-3">
									<Card.Body>
										<Card.Title>
											Projects and opportunities I'm interested in
										</Card.Title>
										<Card.Text>
											1.Software that enables creators. Think GitLab, GitHub,
											Figma, Miro, Procreate, Affinity and the like.
											<br />
											2.Digital illustration projects.
											<br />
											3.Creative surface design.
										</Card.Text>
									</Card.Body>
								</Card>
							</Fade>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Fade right>
								<Card border="success" className="pf-card-h">
									<Card.Body>
										<Card.Title>Fave languages and frameworks</Card.Title>
										<Card.Text className="mt-2 mb-5">
											python and django framework.
										</Card.Text>
										<Card.Text>
											HTML , CSS , JS vue.js and react.js framworks.
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
