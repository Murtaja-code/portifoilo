import { makeStyles, createMuiTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({ title: { color: "#cacaca" }, text: { color: "#8a8a8a" } })

export default useStyles

export const theme = createMuiTheme({
	overrides: {
		MuiOutlinedInput: {
			root: {
				"& fieldset": {
					borderColor: "#cacaca"
				},
				"&:hover fieldset": {
					borderColor: "#cacaca !important"
				},
				"&.Mui-focused fieldset": {
					borderColor: "#cacaca !important"
				}
			},
			input: {
				color: "#cacaca",
				background: "#2f2f2f",
				borderRadius: "5px"
			},
			multiline: {
				minHeight: "90px",
				background: "#2f2f2f"
			}
		}
	}
})
