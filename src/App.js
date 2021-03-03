import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Work from "./components/Work"
import Intro from "./components/Intro"
import { Badge, Button } from "react-bootstrap"
import { animateScroll as scroll } from "react-scroll"

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
			console.log("d")
			document.getElementById("scroll").className = "scroll-t-btn"
		} else {
			console.log("s")
			document.getElementById("scroll").className = "hide-scroll-t-btn"
		}
	}
	return (
		<div>
			<NavBar />
			<Intro />
			<Button id="scroll" onClick={scrollToTop}>
				Top
			</Button>
			<Work />
			<About />
			<Contact />
			<Badge variant="light" className="badge mt-5">
				designed and developed <br /> by Murtaja Adnan
			</Badge>
		</div>
	)
}

export default App
