import React from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import "./style.css"

function Contact(props) {
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
						then please drop a message and let’s chat! <br />
						<br />
						<strong>Email</strong>: murtajaadnan7@gmail.com
					</p>
				</Col>
				<Col xs={12} md={6}>
					<Form onSubmit={(e) => props.handleSubmit(e)}>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Your name</Form.Label>
							<Form.Control
								onChange={(e) => props.handleName(e)}
								value={props.value.name}
								type="text"
								placeholder="type your name..."
							/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								onChange={(e) => props.handleEmail(e)}
								value={props.value.email}
								type="email"
								placeholder="type your email address"
							/>
						</Form.Group>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Example textarea</Form.Label>
							<Form.Control
								onChange={(e) => props.handleText(e)}
								value={props.value.text}
								as="textarea"
								rows={3}
								placeholder="type your message..."
							/>
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
