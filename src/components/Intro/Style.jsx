import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	grid: {
		width: "100vw"
	},
	mainColor: {
		color: "#8a8a8a !important"
	},
	CvBtn: {
		textTransform: "inherit !important",
		background: "red",
		"&:hover": {
			backgroundColor: "#d05252"
		},
		mainColor: {
			color: "#8a8a8a "
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
