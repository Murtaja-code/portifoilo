import React from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import "./style.css"

function Contact() {
	return (
		<Container className="margin-top" id="contact">
			<h3>Contact</h3>

			<Row>
				<Col xs={12} md={6} className="my-auto">
					<h4>Would like to know more!</h4>
					<p className="ml-2 ">
						Are you interested in my work and have other suggestions? <br /> Do
						you have a project that could use my skills? <br /> Do you want to
						hire me? <br />
						then please drop a message and let’s chat!
					</p>
				</Col>
				<Col xs={12} md={6}>
					<Form>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Your name</Form.Label>
							<Form.Control type="text" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Example textarea</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default Contact
