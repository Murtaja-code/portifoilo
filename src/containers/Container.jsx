import React, { useState } from "react"
import Particles from "react-tsparticles"
import particlesConfig from "../particle-config"
import NavBar from "../components/NavBar/NavBar"
import Intro from "../components/Intro/Intro"
import Work from "../components/Work/Work"
import SwipeableViews from "react-swipeable-views"

function Container() {
	const [index, setIndex] = useState(0)

	return (
		<div>
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
			<SwipeableViews index={index}>
				<div style={Object.assign({})}>
					<Intro />
				</div>
				<div style={Object.assign({})}>
					<Work />
					wertyu
				</div>
			</SwipeableViews>
		</div>
	)
}

export default Container
