import {createRoot} from "react-dom/client";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvider";

createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);