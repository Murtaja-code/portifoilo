import React from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import Rotate from "react-reveal/Rotate"

import "./style.css"
// deconstructe it
function Contact(props) {
	return (
		<Container className="margin-top" id="contact">
			<h3 className="f-title">Contact</h3>

			<Row>
				<Col xs={12} md={6} className="my-auto">
					<Rotate top left>
						<div className="intro-font">
							<h4>Would like to know more!</h4>
							<p className="ml-2 ">
								Are you interested in my work and have other suggestions? <br />{" "}
								Do you have a project that could use my skills? <br /> Do you
								want to hire me? <br />
								then please drop a message and let’s chat! <br />
								<br />
								<strong>Email</strong>: murtajaadnan7@gmail.com
							</p>
						</div>
					</Rotate>
				</Col>
				<Col xs={12} md={6}>
					<Rotate top right>
						<div>
							<Form onSubmit={(e) => props.handleSubmit(e)}>
								<Form.Group controlId="formBasicPassword">
									<Form.Label>Your name</Form.Label>
									<Form.Control
										className="form-border"
										onChange={(e) => props.handleName(e)}
										value={props.value.name}
										type="text"
										placeholder="type your name..."
									/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										className="form-border"
										onChange={(e) => props.handleEmail(e)}
										value={props.value.email}
										type="email"
										placeholder="type your email address"
									/>
								</Form.Group>

								<Form.Group controlId="exampleForm.ControlTextarea1">
									<Form.Label>Example textarea</Form.Label>
									<Form.Control
										className="form-border"
										onChange={(e) => props.handleText(e)}
										value={props.value.text}
										as="textarea"
										rows={3}
										placeholder="type your message..."
									/>
								</Form.Group>
								<Button
									variant="outline-secondary"
									type="submit"
									disabled={
										props.value.name === "" ||
										props.value.email === "" ||
										props.value.text === ""
									}>
									Submit
								</Button>
							</Form>
						</div>
					</Rotate>
				</Col>
			</Row>
		</Container>
	)
}

export default Contact
