import { createTheme } from '@mui/material/styles'
import { indigo } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
  },
})

export default theme
