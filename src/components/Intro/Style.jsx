import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	CvBtn: {
		textTransform: "inherit !important",
		background: "red",
		"&:hover": {
			backgroundColor: "#d05252"
		},
		color: "white",
		animation: "$myEffect ",
		animationDuration: "18s"
	},
	"@keyframes myEffect": {
		"0%": {
			opacity: "0%",
			display: "none"
		},
		"30%": {
			opacity: "0%",
			display: "none"
		},
		"40%": {
			opacity: "0%",
			display: "none"
		},
		"50%": {
			opacity: "50%",
			display: "block"
		},
		"100%": {
			opacity: "100%",
			display: "block"
		}
	},
	a: {
		textDecoration: "none",
		color: "white"
	},
	name: {
		fontSize: "2rem !important",
		color: "#cacaca",
		paddingBottom: "10px"
	},
	"@media  (max-width: 700px)": {
		name: {
			fontSize: "1.5rem !important",
			color: "#cacaca",
			paddingBottom: "10px"
		}
	}
})

export default useStyles
