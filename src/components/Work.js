import React, { useState, useEffect } from "react"
import { Container, Card, CardColumns, Button, Row, Col } from "react-bootstrap"
import "./style.css"
import CardData from "../ConstData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faImages } from "@fortawesome/free-solid-svg-icons"
import Fade from "react-reveal/Fade"

function Work() {
	const [num, setNum] = useState(2)
	const [cards, SetCards] = useState([])

	useEffect(() => {
		handleCards()
	}, [num])

	const handleCards = () => {
		var temCrads = []
		if (num === 2) {
			for (let i = 0; i <= num; i++) {
				temCrads.push(CardData[i])
				SetCards(temCrads)
			}
		} else {
			for (let i = 0; i <= num; i++) {
				temCrads.push(CardData[i])
				SetCards(temCrads)
			}
		}
	}
	const handleClick = (x) => {
		if (x === 2) {
			setNum(x)
		} else {
			setNum(CardData.length - 1)
		}
	}
	return (
		<Container className="margin-top mb-5" id="work">
			<h3 align="left" className="mb-5 f-title">
				Work
			</h3>
			<Row className="pb-3">
				{cards.map((card, i) => (
					<Col key={i} xs={12} md={6} lg={4} className="pt-2">
						<Fade left>
							<Card className="work">
								<Card.Img variant="top" src={card.img} />
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
						</Fade>
					</Col>
				))}
			</Row>
			{num === 2 ? (
				<Button variant="outline-info" onClick={handleClick}>
					Show more..
				</Button>
			) : (
				<Button variant="outline-info" onClick={() => handleClick(2)}>
					Show less
				</Button>
			)}
		</Container>
	)
}

export default Work
