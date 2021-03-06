import React from "react"
import { Navbar, Nav, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faFacebookSquare,
	faLinkedin,
	faTwitterSquare,
	faWhatsappSquare,
	faGithub
} from "@fortawesome/free-brands-svg-icons"
import src from "../Images/IMG_20210126_110122.jpg"
import { Link } from "react-scroll"
import Spin from "react-reveal/Spin"

import "./style.css"
function NavBar() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand>
					<Image src={src} roundedCircle width="40" />
				</Navbar.Brand>
				<Navbar.Brand className="nav-name-hide nav-name-font">
					Murtaja <br /> Adnan
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" align="center">
					<Nav className="mr-auto mr-5">
						<Link
							className="mr-2"
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav className="scroll-link">Home</Nav>
						</Link>
						<Link
							className="mr-2"
							to="work"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav className="scroll-link">Work</Nav>
						</Link>

						<Link
							className="mr-2 scroll-link"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav className="scroll-link">About</Nav>
						</Link>
						<Link
							className="scroll-link"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav className="scroll-link">Contact</Nav>
						</Link>
					</Nav>
					<Nav className="ml-auto mr-2">
						<Spin>
							<Nav.Link href="https://github.com/Murtaja-code">
								<FontAwesomeIcon icon={faGithub} size="2x" color="#6e5494" />
							</Nav.Link>
						</Spin>
						<Spin>
							<Nav.Link href="https://www.facebook.com/murtaja.adnan.52">
								<FontAwesomeIcon
									icon={faFacebookSquare}
									size="2x"
									color="#3b5998"
								/>
							</Nav.Link>
						</Spin>
						<Spin>
							<Nav.Link href="https://www.linkedin.com/in/murtaja-adnan-2a02b9206">
								<FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
							</Nav.Link>
						</Spin>
						<Spin>
							<Nav.Link href="#link">
								<FontAwesomeIcon
									icon={faTwitterSquare}
									size="2x"
									color="#1da1f2"
								/>
							</Nav.Link>
						</Spin>
						<Spin>
							<Nav.Link href="https://wa.link/mqi0ce">
								<FontAwesomeIcon
									icon={faWhatsappSquare}
									size="2x"
									color="#25d366"
								/>
							</Nav.Link>
						</Spin>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
