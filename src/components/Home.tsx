import { Card, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import cities from "../data.json";
import CardItem from "../components/Card";
import AppBar from "../components/AppBar";

const Home = () => {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <CardItem tour={tour} key={tour.id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default Home;
