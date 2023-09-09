import { Button, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/slices/auth/thunk";

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const onSubmit = handleSubmit(({email, password, displayName}) => {
    dispatch(startCreatingUserWithEmailPassword({email, password, displayName}))
  })

  return (
    <AuthLayout title={"Registro"}>
      <form onSubmit={onSubmit}>
        <TextField
          label="Usuario"
          variant="outlined"
          sx={{ mb: 2, mt: 2 }}
          fullWidth
          {...register("displayName")}
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
          {...register("email")}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          sx={{ mb: 2 }}
          fullWidth
          {...register("password")}
        />
        <Button type="submit" variant="contained" sx={{ mt: 1 }} fullWidth>
          Registrarme
        </Button>
      </form>
      <Typography textAlign={"center"} sx={{ mt: 2 }}>
        ya tienes una cuenta?{" "}
        <Link component={LinkRouter} to={"/auth/login"}>
          ingresa
        </Link>
      </Typography>
    </AuthLayout>
  );
};
