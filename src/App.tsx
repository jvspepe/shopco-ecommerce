import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
};

export default App;
