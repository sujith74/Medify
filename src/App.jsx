import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Download from "./Download/Download";
import Footer from "./Footer/Footer";
/**
 * The main App component.
 *
 * This component renders the main application layout.
 * @returns {ReactElement} The App component.
 */
function App() {
  return (
    <div>
      <CssBaseline />
      {/* Renders nested routes */}
      <Outlet />
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
