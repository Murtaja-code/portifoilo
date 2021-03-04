import React, { useState } from "react"
import Contact from "../components/Contact"
function ContactForm() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [text, setText] = useState("")

	const handleName = (e) => {
		setName(e.target.value)
	}
	const handleEmail = (e) => {
		setEmail(e.target.value)
	}
	const handleText = (e) => {
		setText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("done")
		setText("")
		setEmail("")
		setName("")
	}
	return (
		<div>
			<Contact
				value={{ name: name, email: email, text: text }}
				handleEmail={handleEmail}
				handleName={handleName}
				handleText={handleText}
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default ContactForm
