import {createRoot} from "react-dom/client";
import {App} from "app/index";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/themeProvider";

createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);