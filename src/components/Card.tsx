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
const Card = () => {
  return (
    <Grid item xs={3} marginTop={2}>
      <ThemeProvider theme={theme}>
        <Paper sx={{ borderRadius: "10px" }}>
          <img
            alt=""
            className="img"
            src="data:image/jpeg;base64,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"
          />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              Immerce into the Falls
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                5 hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                4.5
              </Typography>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                (655 reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C $1224
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default Card;
