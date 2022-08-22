import { BottomNavigation, Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ImageCollage from "./ImageCollage";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import AccordionItem from "./AccordionItem";
import BasicModal from "./Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box sx={{ marginTop: 3, display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "5px",
          }}
        >
          <img
            src="https://media.istockphoto.com/photos/panoramic-view-of-las-vegas-strip-at-night-in-nevada-picture-id1166193649?k=20&m=1166193649&s=612x612&w=0&h=4i4jr8mB4HhjGej5sc6xcXE9GO_jks7IO04XymKdLdU="
            alt=""
            height={372}
            width={400}
          />
          <img
            src="https://media.istockphoto.com/photos/panoramic-view-of-las-vegas-strip-at-night-in-nevada-picture-id1166193649?k=20&m=1166193649&s=612x612&w=0&h=4i4jr8mB4HhjGej5sc6xcXE9GO_jks7IO04XymKdLdU="
            alt=""
            height={372}
            width={400}
          />
        </Box>
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginY={1}>
          About this ticket
        </Typography>
        <Typography variant="subtitle1" component="p" marginTop={0}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          nostrum soluta, delectus corporis quidem est aspernatur at vel
          provident quis eum similique repellendus eius, voluptates nesciunt ab
          accusamus rerum? Reprehenderit eum mollitia, excepturi dolor
          recusandae dolorum quam ipsa maiores pariatur!
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginY={1}>
          Frequently asked questions
        </Typography>
        <AccordionItem />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
