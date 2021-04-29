import React, { useState } from "react"
import ContactForm from "../components/Contact/ContactForm"
import emailjs, { init } from "emailjs-com"

init("user_EP1niFzrjn0C8VpbdDmuU")
function Contact() {
	const [message, setMessage] = useState({
		firstName: "",
		lastName: "",
		email: "",
		text: ""
	})

	const handleChange = (e) => {
		const name = e.target.name

		setMessage({
			...message,
			[name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		var templateParams = {
			to_name: "Find Yours Team",
			from_name: message.firstName + " " + message.lastName,
			from_email: message.email,
			message: message.text
		}

		emailjs.send("service_14xycl8", "template_khn7z6c", templateParams).then(
			() => {
				setMessage({
					firstName: "",
					lastName: "",
					text: "",
					email: ""
				})
				alert("Success: Your message has been sent!")
			},
			function (error) {
				setMessage({
					firstName: "",
					lastName: "",
					text: "",
					email: ""
				})
				alert("Failed: Please try again!" + error)
			}
		)
	}

	return (
		<div>
			<ContactForm handleChange={handleChange} handleSubmit={handleSubmit} values={message} />
		</div>
	)
}

export default Contact
