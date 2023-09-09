import { Divider, Grid, Typography } from "@mui/material";

export const FormsLayout = ({ title, children }) => {
  return (
    <Grid
      container
      display={"flex"}
      sx={{ backgroundColor: "white", height: "auto" }}
      borderRadius={1}
      boxShadow={4}
      padding={5}
      direction={"column"}
    >
      <Typography variant="h4">{title}</Typography>
      <Divider sx={{ mb: 2, mt: 1 }} />
      {children}
    </Grid>
  );
};
