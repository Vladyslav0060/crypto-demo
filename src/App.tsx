import { Container } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardItem from "./components/Card";
import { Card, Grid } from "@mui/material";
import AppBar from "./components/AppBar";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Grid>
      </Container>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
