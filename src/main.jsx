import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import DevErrorBoundary from "./components/DevErrorBoundary.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import './index.css';


createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AuthProvider>
      <DevErrorBoundary>
        <App />
      </DevErrorBoundary>
    </AuthProvider>
  </BrowserRouter>
);
