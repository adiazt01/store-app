import { Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Grid container padding={4} pl={30} gap={4} mt={8} position={"relative"}>
        {children}
      </Grid>
    </>
  );
};
