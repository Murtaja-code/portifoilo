import React, { useState } from "react"
import {
	Button,
	IconButton,
	ListItemText,
	ListItem,
	List,
	Drawer,
	Box,
	Typography,
	useMediaQuery
} from "@material-ui/core"
import { Menu, Close, Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons"
import useStyles from "./Style"

const tabs = ["Home", "Experience", "About", "Contact"]
function NavBar() {
	const classes = useStyles()
	const [openDrawer, setOpenDrawer] = useState(false)
	const handleDrawer = () => {
		setOpenDrawer(!openDrawer)
	}
	return (
		<div>
			<Button className={classes.projectBtn} variant="contained" color="primary">
				My Projects
			</Button>
			<IconButton onClick={handleDrawer}>
				<Menu className={classes.menuIcon} />
			</IconButton>
			<SocialMedia />
			<Drawer anchor="top" open={openDrawer} classes={{ paper: classes.paper }}>
				<Box component="div" py={3}>
					<IconButton onClick={handleDrawer}>
						<Close className={classes.menuIcon} />
					</IconButton>
				</Box>
				<List lign="center">
					{tabs.map((tab, i) => (
						<ListItem button className={classes.tabs} key={i}>
							<ListItemText>
								<Typography variant="h3">{tab}</Typography>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	)
}

export default NavBar

function SocialMedia() {
	const classes = useStyles()
	const mobile = useMediaQuery("(max-width: 700px)")
	const icons = [
		{
			icon: <GitHub style={{ color: "#4078c0" }} className={classes.socialIcons} />,
			url: "https://github.com/murtaja1"
		},
		{
			icon: <LinkedIn style={{ color: "#0e76a8 " }} className={classes.socialIcons} />,
			url: "https://www.linkedin.com/in/murtaja-adnan-2a02b9206/"
		},
		{
			icon: <Twitter style={{ color: "#1DA1F2" }} className={classes.socialIcons} />,
			url: "https://twitter.com/murtj14"
		},
		{
			icon: <Facebook style={{ color: "#4267B2" }} className={classes.socialIcons} />,
			url: "https://www.facebook.com/murtaja.adnan.52"
		}
	]
	return (
		<>
			<div className={`${mobile && classes.socialIconsMobile}`}>
				{icons.map((icon, i) => (
					<IconButton key={i}>
						<a href={icon.url}>{icon.icon}</a>
					</IconButton>
				))}
			</div>
		</>
	)
}
