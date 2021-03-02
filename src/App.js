import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Work from "./components/Work"
function App() {
	return (
		<div className="App">
			<NavBar />
			<Work />
			<About />
			<Contact />
		</div>
	)
}

export default App
