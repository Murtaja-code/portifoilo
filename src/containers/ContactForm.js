import React, { useState } from "react"
import Contact from "../components/Contact"
import emailjs, { init } from "emailjs-com"

init("user_EP1niFzrjn0C8VpbdDmuU")
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
		var templateParams = {
			name: "Murtaja",
			from_name: name,
			from_email: email,
			message: text
		}

		emailjs.send("service_14xycl8", "template_khn7z6c", templateParams).then(
			function (response) {
				setText("")
				setEmail("")
				setName("")
				alert("Success: Your message has been sent!")
			},
			function (error) {
				alert("Failed: Please try again!")
			}
		)
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
