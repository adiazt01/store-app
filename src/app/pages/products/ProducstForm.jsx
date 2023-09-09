import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { AttachMoney, ViewInAr } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startCreatingProduct } from "../../../store/slices/products/thunk";
import { FormsLayout } from "../../layout/FormsLayout";
import { useNavigate } from "react-router-dom";

export const ProductsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitTask = handleSubmit(({ productName, productPrice }) => {
    dispatch(startCreatingProduct({ productName, productPrice }));
    reset();
    navigate("/");
  });

  return (
    <FormsLayout title={"Crear un producto"}>
      <form onSubmit={onSubmitTask}>
        <Grid item sx={{ width: "300px" }}>
          <TextField
            fullWidth
            label="Nombre del producto"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ViewInAr />
                </InputAdornment>
              ),
            }}
            {...register("productName")}
          />
          <TextField
            label="Precio en BsF."
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoney />
                </InputAdornment>
              ),
              pattern: "[0-9]*",
            }}
            sx={{ mt: 3, mb: 3 }}
            {...register("productPrice")}
          />
        </Grid>
        <Divider />
        <Button type="submit" sx={{ mt: 3 }} variant="contained">
          Crear producto
        </Button>
      </form>
    </FormsLayout>
  );
};
