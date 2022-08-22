import { Paper, Grid, Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme: any = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        // {
        //   props: {
        //     variant: "body3",
        //   },
        //   style: {
        //     fontSize: 9,
        //   },
        // },
      ],
    },
  },
});
const Card = ({ tour }: any) => {
  return (
    <Grid item xs={3} marginTop={2}>
      <ThemeProvider theme={theme}>
        <Paper sx={{ borderRadius: "10px" }}>
          <img alt="" className="img" src={tour.image} />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={tour.rating}
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default Card;
