import Particles from "react-tsparticles"
import particlesConfig from "./particle-config"
import NavBar from "./components/NavBar/NavBar"
import "./App.css"

function App() {
	return (
		<div className="App">
			<Particles
				id="tsparticles"
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%"
				}}
				params={particlesConfig}
			/>
			<NavBar />
		</div>
	)
}

export default App
