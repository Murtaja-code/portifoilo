import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
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
	}
})

export default useStyles
