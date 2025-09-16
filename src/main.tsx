import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'

import {BrowserRouter} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {red} from "@mui/material/colors";

// Handle runtime errors
const showErrorOverlay = (err: Event) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');
    if (!ErrorOverlay) {
        return;
    }
    const overlay = new ErrorOverlay(err);
    const body = document.body;
    if (body !== null) {
        body.appendChild(overlay);
    }
};

window.addEventListener('error', showErrorOverlay);
window.addEventListener('unhandledrejection', ({reason}) =>
    showErrorOverlay(reason),
);

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
)
