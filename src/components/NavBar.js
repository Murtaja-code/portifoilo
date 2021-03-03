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
import "./style.css"
function NavBar() {
	return (
		<div>
			<Navbar bg="white" expand="lg">
				<Navbar.Brand>
					<Image src={src} roundedCircle width="40" />
				</Navbar.Brand>
				<Navbar.Brand>
					Murtaja <br /> Adnan
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" align="left">
					<Nav className="mr-auto mr-5">
						<Link
							className="mr-2 "
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<span className="scroll-link">Home</span>
						</Link>
						<Link
							className="mr-2 scroll-link"
							to="work"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav>Work</Nav>
						</Link>
						<Link
							className="mr-2 scroll-link"
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							<Nav>About</Nav>
						</Link>
						<Link
							className="scroll-link"
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={1000}>
							Contact
						</Link>
					</Nav>
					<Nav className="ml-auto mr-5">
						<Nav.Link href="#link">
							<FontAwesomeIcon icon={faGithub} size="2x" color="#6e5494" />
						</Nav.Link>
						<Nav.Link href="#link">
							<FontAwesomeIcon
								icon={faFacebookSquare}
								size="2x"
								color="#3b5998"
							/>
						</Nav.Link>
						<Nav.Link href="#link">
							<FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
						</Nav.Link>
						<Nav.Link href="#link">
							<FontAwesomeIcon
								icon={faTwitterSquare}
								size="2x"
								color="#1da1f2"
							/>
						</Nav.Link>
						<Nav.Link href="#link">
							<FontAwesomeIcon
								icon={faWhatsappSquare}
								size="2x"
								color="#25d366"
							/>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
