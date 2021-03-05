import React, { useState, useEffect } from "react"
import { Container, Card, CardColumns, Button } from "react-bootstrap"
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
		<Container className="margin-top" id="work">
			<h3 align="left" className="mb-5">
				Work
			</h3>
			<CardColumns>
				{cards.map((card, i) => (
					<Fade left key={i}>
						<Card className="work-card">
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
				))}
			</CardColumns>
			{num === 2 ? (
				<Button variant="primary" onClick={handleClick}>
					Show more..
				</Button>
			) : (
				<Button variant="primary" onClick={() => handleClick(2)}>
					Show less
				</Button>
			)}
		</Container>
	)
}

export default Work
