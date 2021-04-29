import React from "react"
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container,
	ThemeProvider
} from "@material-ui/core"
import useStyles, { theme } from "./Style"

function ContactForm({ handleChange, handleSubmit, values }) {
	const classes = useStyles()
	const { firstName, lastName, email, text } = values

	return (
		<Container maxWidth="md">
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Box mt={16}>
					<div className={classes.paper}>
						<Typography component="h1" variant="h5"></Typography>
						<form onSubmit={handleSubmit}>
							<Grid container spacing={3} direction="row" justify="space-around">
								<Grid item xs={12} sm={6}>
									<TextField
										value={firstName}
										onChange={(e) => handleChange(e)}
										autoComplete="fname"
										name="firstName"
										variant="outlined"
										placeholder="first name"
										required
										fullWidth
										id="firstName"
										autoFocus
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										value={lastName}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										placeholder="last name"
										required
										fullWidth
										id="lastName"
										name="lastName"
										autoComplete="lname"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={email}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										placeholder="eamil"
										required
										fullWidth
										id="email"
										name="email"
										autoComplete="email"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										value={text}
										onChange={(e) => handleChange(e)}
										variant="outlined"
										multiline
										rowsMax={4}
										required
										fullWidth
										placeholder="message"
										name="text"
										type="TextareaAutosize"
										id="textarea"
									/>
								</Grid>
								<Grid item xs={12}>
									<Button type="submit" color="primary" variant="contained">
										submit
									</Button>
								</Grid>
							</Grid>
						</form>
					</div>
				</Box>
			</ThemeProvider>
		</Container>
	)
}

export default ContactForm
