import { FormsLayout } from "../../layout/FormsLayout";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Paid, ShoppingBasket } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { startRegisterSale } from "../../../store/slices/sales/thunk";
import { useNavigate } from "react-router-dom";

export const SaleRegister = () => {
  const { products } = useSelector((state) => state.products);
  const { register, handleSubmit, reset, resetField } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitSale = handleSubmit(
    ({ amountSale, lootSale, productSale, methodSale }) => {
      dispatch(
        startRegisterSale({ amountSale, lootSale, productSale, methodSale })
      );
      reset();
      navigate("/");
    }
  );

  return (
    <FormsLayout title={"Registro de venta"}>
      <form onSubmit={onSubmitSale}>
        <Grid item sx={{ width: "300px" }}>
          <TextField
            label="Monto"
            autoComplete="false"
            sx={{ mt: 3, mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Paid />
                </InputAdornment>
              ),
            }}
            {...register("amountSale")}
          />
          <TextField
            label="Cantidad"
            autoComplete="false"
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ShoppingBasket />
                </InputAdornment>
              ),
            }}
            {...register("lootSale")}
          />
          <InputLabel>Producto</InputLabel>
          <Select
            MenuProps={{ style: { maxHeight: "300px" } }}
            sx={{ mb: 3, width: "200px", height: "50px" }}
            defaultValue={""}
            {...register("productSale")}
            onSubmit={resetField}
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.productName}>
                {product.productName}
              </MenuItem>
            ))}
          </Select>
          <InputLabel>Metodo de pago</InputLabel>
          <Select
            MenuProps={{ style: { maxHeight: "300px" } }}
            sx={{ mb: 3, width: "200px", height: "50px" }}
            defaultValue={""}
            {...register("methodSale")}
          >
            <MenuItem value="Efectivo">Efectivo</MenuItem>
            <MenuItem value="Punto">Punto</MenuItem>
            <MenuItem value="transferencia">transferencia</MenuItem>
            <MenuItem value="Pago movil">Pago movil</MenuItem>
          </Select>
        </Grid>
        <Divider />
        <Button type="submit" sx={{ mt: 3 }} variant="contained">
          Registrar ventar
        </Button>
      </form>
    </FormsLayout>
  );
};
