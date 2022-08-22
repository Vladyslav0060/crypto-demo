import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppBar from "./components/AppBar";
import Tour from "./components/Tour";
import BreadcrumbsItem from "./components/BreadCrumpbsItem";
import { Container } from "@mui/system";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Container sx={{ width: "900px" }}>
          <BreadcrumbsItem />
        </Container>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/items">Click to move on</Link>
              </>
            }
          />
          <Route path="/items" element={<Home />} />
          <Route path="items/:id" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
