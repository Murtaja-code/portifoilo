import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	overflow: {
		overflow: "hidden"
	},
	onTop: {
		position: "relative",
		zIndex: 99
	},
	active: {
		color: "#afafaf"
	},
	socialIcons: {
		color: "#4078c0",
		fontSize: "40px",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.4)",
			"-webkit-transform": "scale(1.4)"
		}
	},
	paper: {
		background: "#2f2f2f",
		height: "100% !important"
	},
	tabs: {
		height: "20vh",
		textAlign: "center",
		color: "#8a8a8a"
	},
	link: {
		textDecoration: "none"
	},
	projectBtn: {
		position: "fixed",
		zIndex: "99 !important",
		top: "85px",
		right: "-160px",
		transform: "rotate(50deg)",
		width: "500px",
		height: "45px"
	},
	menuIcon: {
		color: "#8a8a8a",
		fontSize: "50px",
		position: "fixed",
		top: "35px",
		right: "25px",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.2)",
			"-webkit-transform": "scale(1.2)"
		}
	},
	mobileMenuIcon: {
		marginTop: "8px",
		color: "#8a8a8a",
		background: "#232323",
		fontSize: "30px",
		padding: "5px",
		borderRadius: "50%",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.2)",
			"-webkit-transform": "scale(1.2)"
		}
	},
	contactMenuIcon: {
		fontSize: "40px"
	},
	"@media (max-width: 700px)": {
		projectBtn: {
			position: "fixed",
			zIndex: "99 !important",
			top: "40px",
			right: "-199px",
			transform: "rotate(50deg)",
			width: "500px",
			height: "40px"
		},
		socialIconsMobile: {
			position: "fixed",
			bottom: 0,
			width: "100%"
		}
	}
})

export default useStyles
