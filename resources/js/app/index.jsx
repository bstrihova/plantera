import React from 'react';
import ReactDOM from "react-dom"
import App from "./App/App"
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"

const theme = createMuiTheme({
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
    }
})


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    , document.getElementById('app')
);