import "./App.css"
import About from "./components/About"
import ContactForm from "./containers/ContactForm"
import NavBar from "./components/NavBar"
import Work from "./components/Work"
import Intro from "./components/Intro"
import { Badge, Button } from "react-bootstrap"
import { animateScroll as scroll } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

function App() {
	const scrollToTop = () => {
		scroll.scrollToTop()
	}

	window.onscroll = () => {
		handleScroll()
	}

	const handleScroll = () => {
		if (
			document.body.scrollTop > 400 ||
			document.documentElement.scrollTop > 400
		) {
			document.getElementById("scroll").className = "scroll-t-btn"
		} else {
			document.getElementById("scroll").className = "hide-scroll-t-btn"
		}
	}
	return (
		<div className="bg-color">
			<NavBar />
			<Intro />
			<Button id="scroll" onClick={scrollToTop} className="hide-scroll-t-btn">
				Top <FontAwesomeIcon icon={faArrowUp} size="sm" color="#fff" />
			</Button>
			<Work />
			<About />
			<ContactForm />
			<Badge variant="light" className="badge mt-5">
				designed and developed <br /> by Murtaja Adnan
			</Badge>
		</div>
	)
}

export default App
