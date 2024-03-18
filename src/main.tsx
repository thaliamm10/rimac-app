import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./views/App.tsx";

const rootElement = document.getElementById("root");
if (rootElement instanceof HTMLElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App/>
        </StrictMode>
    );
} else {
    console.error("No se pudo encontrar el elemento con el id 'root'");
}
