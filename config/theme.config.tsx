import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

type ThemeProp = {
  children: JSX.Element

}

const theme = createTheme({
  palette: {
    secondary: {
      main: "#e8a709"
    }
  },
  components: {
    MuiTabs: {
      defaultProps: {
        style: {
          color: "rgb(255, 255, 255)",
          fontWeight: "bold"
        }
      }
    },
    MuiTab: {
      defaultProps: {
        style: {
          color: "rgb(255, 255, 255, 0.7)",
          fontWeight: "bold"
        }
      }
    }
  }

})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}