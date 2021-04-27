import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	socialIcons: {
		fontSize: "40px",
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.4)"
		}
	},
	socialIconsMobile: {
		position: "fixed",
		bottom: 0,
		width: "100%"
	},
	paper: {
		background: "#333",
		height: "100% !important"
	},
	tabs: {
		height: "20vh",
		textAlign: "center",
		color: "#8a8a8a"
	},
	projectBtn: {
		transform: "rotate(50deg)",
		position: "fixed",
		top: "85px",
		right: "-160px",
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
	curve: {
		position: "absolute",
		left: "0rem",
		right: "0rem",
		bottom: "50%",
		padding: "0.2rem 0rem 1.5rem 0rem",
		textAlign: "center",
		backgroundColor: "#4267B2",
		width: "3.25rem",
		height: "1.5rem",
		borderRadius: "100% / 100%",
		borderTopLeftRadius: "0",
		borderBottomLeftRadius: "0"
	}
})

export default useStyles
