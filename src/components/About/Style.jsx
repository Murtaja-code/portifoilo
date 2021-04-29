import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	scale: {
		transition: "transform .2s",
		"&:hover": {
			transform: "scale(1.3)"
		}
	},
	topText: {
		color: "#cacaca",
		marginBottom: "2rem"
	}
})

export default useStyles
