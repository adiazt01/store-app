import { Button, Grid, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SalesDashboard = () => {
  const { totalSales } = useSelector((state) => state.sales);
  const navigate = useNavigate();

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
      <Grid item display={"flex"}>
        <Typography variant="h4">Ventas</Typography>
      </Grid>
      <Grid item display={"flex"}>
        <Paper>{totalSales}$</Paper>
      </Grid>
      <Grid
        container
        item
        display={"flex"}
        justifyContent={"flex-end"}
        direction={"row"}
      >
        <Button variant="contained" onClick={() => navigate("/sales/register")}>
          Registrar venta
        </Button>
      </Grid>
    </Grid>
  );
};
