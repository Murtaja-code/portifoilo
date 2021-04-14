import React from "react"
import { Row, Col, Container, Card } from "react-bootstrap"
import "./style.css"
import Fade from "react-reveal/Fade"
function About() {
	return (
		<Container className="margin-top" id="about">
			<h3 align="left" className="mb-4 f-title">
				About
			</h3>
			<div className="p-2 about">
				What is intriguing about programming is that, I am the master of the
				field, it's a world that I set the rules and conditions for, <br />
				<br /> I remember the first line of code I wrote and how happy and
				powerful it made me feel. It was using python, just print('hello, world'
				). <br />
				My first programming language was python and with it I was able to write
				some good and clean programs.
				<br /> After that I took CS50 which is an online course offered by
				Harvard University, this course made me even more connected with coding
				and feel unstoppable when it comes to problem-solving and how to keep
				improving and learning new technologies.
				<br /> As I finished CS50W I built 5 projects. <br />
				<br />
				My passion remains with me through my studying, working and keeps me
				siting in front of the computer for hours and hours without getting
				bored but actually enjoying it.
				<br />
				<br /> I was recently accepted in Iraq React Web Bootcamp offered by
				Re:Coded, teaching not only coding but also teamwork and communication
				skills... It's 3 months of intensive project-based learning + immersive
				coding, with a simulated client project.
				<br /> Besides the bootcamp I am currently having a contract as a
				frontend web developer. <br />
				<br />
				There is certainly a lot to learn, new problems to solve and more to
				build, for that I am very excited about the future.
				<br />
				<br />
				<hr />
				<strong> Specialty: </strong>Full stack Web Developer: <br />
				<strong>Frontend: </strong>
				typescript and javascript with Vue.js and React.js frameworks, HTML, CSS
				and responsive design. <br />
				<strong> Backend: </strong> python with django and flask frameworks,
				Databases. <br />
				<strong> Version Control: </strong>Github, git.
			</div>
		</Container>
	)
}

export default About
