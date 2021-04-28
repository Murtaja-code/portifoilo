import React, { useState } from "react"
import Particles from "react-tsparticles"
import particlesConfig from "../particle-config"
import NavBar from "../components/NavBar/NavBar"
import Intro from "../components/Intro/Intro"
import Work from "../components/Work/Work"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function Container() {
	const [index, setIndex] = useState(0)

	return (
		<div style={{ overflow: "hidden" }}>
			<BrowserRouter>
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
				<NavBar setIndex={setIndex} index={index} />
				<Switch>
					<Route exact path="/" component={Intro} />
					<Route exact path="/work" component={Work} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default Container
