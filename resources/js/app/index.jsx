import React from 'react';
import ReactDOM from "react-dom"
import App from "./App/App"
import {ThemeProvider, createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#246b43",
            light: "#549a6e",
            dark: "#003f1b",
        },
        secondary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#cccccc",
        }
    },
    overrides: {
        MuiAvatar: {
          img: {
            // handle correctly non-square images
            objectFit: 'cover',
            height: '100%',
          },
        },
      },

})

theme = responsiveFontSizes(theme);



ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById('app')
);