import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	socialIcons: {
		fontSize: "40px",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.4)"
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
			transform: "scale(1.2)"
		}
	},
	mobileMenuIcon: {
		color: "#8a8a8a",
		background: "#232323",
		fontSize: "28px",
		padding: "5px",
		borderRadius: "50%",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.2)"
		}
	},
	"@media (max-width: 700px)": {
		socialIconsMobile: {
			position: "absolute",
			bottom: 0,
			width: "100%"
		}
	}
})

export default useStyles
