import React, { useState } from "react"
import {
	Button,
	IconButton,
	ListItemText,
	ListItem,
	List,
	Drawer,
	Box,
	Typography
} from "@material-ui/core"
import { Menu, Close } from "@material-ui/icons"
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
