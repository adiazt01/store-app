import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ title, children }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "primary.main", minHeight: "100vh" }}
    >
      <Grid
        item
        container
        xs={3}
        direction={"column"}
        alignItems={"center"}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h4" component={"h1"}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
