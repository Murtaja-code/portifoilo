import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Work from "./components/Work"
import Intro from "./components/Intro"
import { Badge } from "react-bootstrap"
function App() {
	return (
		<div>
			<NavBar />
			<Intro />
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
