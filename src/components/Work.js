import React from "react"
import { Container, Card, CardColumns, Button } from "react-bootstrap"
import "./style.css"
import CardData from "../ConstData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faImages } from "@fortawesome/free-solid-svg-icons"
function Work() {
	return (
		<Container className="margin-top">
			<h3 align="left" className="mb-5">
				Work
			</h3>
			<CardColumns>
				{CardData.map((card, i) => (
					<Card key={i} className="work-card">
						<Card.Body>
							<Card.Title>
								<a href={card.link}>{card.title}</a>
								<a href={card.repo} className="pl-3">
									<FontAwesomeIcon icon={faGithub} size="lg" color="#333" />
								</a>
								<a href={card.img} className="ml-2">
									<FontAwesomeIcon icon={faImages} size="1x" color="#333" />
								</a>
							</Card.Title>

							<Card.Text>{card.descrption}</Card.Text>
							<small>{card.tools}</small>
						</Card.Body>
					</Card>
				))}
			</CardColumns>
			<Button variant="primary">Show more..</Button>
		</Container>
	)
}

export default Work
