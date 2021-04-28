import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({
	link: {
		textDecoration: "none"
	},
	tools: {
		background: "#8a8a8a",
		color: "white",
		margin: "5px",
		"&:hover": {
			background: "#422727"
		}
	},
	"@media  (max-width: 700px)": {
		work: {
			marginTop: "9rem"
		}
	}
})

export default useStyles

export const theme = createMuiTheme({
	overrides: {
		MuiCard: {
			root: {
				transition: "transform .2s",
				"&:hover": {
					transform: "scale(1.05)"
				},
				"&:hover .card": {
					opacity: "30%"
				},
				"& .hidden": {
					display: "none"
				},
				"&:hover .hidden": {
					display: "flex",
					width: "100%",
					position: "absolute",
					bottom: "50%"
				}
			}
		}
	}
})
