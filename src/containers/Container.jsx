import React from "react"
import Particles from "react-tsparticles"
import particlesConfig from "../particle-config"
import NavBar from "../components/NavBar/NavBar"
import Intro from "../components/Intro/Intro"
import Work from "../components/Work/Work"
import About from "../components/About/About"
import Contact from "./Contact"
import { useMediaQuery } from "@material-ui/core"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function Container() {
	const mobile = useMediaQuery("(max-width: 700px)")
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
				{!mobile && <NavBar />}
				<Switch>
					<Route exact path="/" component={Intro} />
					<Route path="/work" component={Work} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
				{mobile && <NavBar />}
			</BrowserRouter>
		</div>
	)
}

export default Container
