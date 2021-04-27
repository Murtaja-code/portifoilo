import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
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
