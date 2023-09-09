import { Button, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { startLoginWithEmailAndPassword } from "../../store/slices/auth/thunk";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()

  const onSubmit = handleSubmit(({email, password}) => {
    dispatch(startLoginWithEmailAndPassword({email, password}))
  })

  return (
    <AuthLayout title={"Login"}>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ mb: 2, mt: 2 }}
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
          Login
        </Button>
      </form>

      <Typography textAlign={"center"} sx={{ mt: 2 }}>
        No tienes una cuenta? <Link component={LinkRouter} to={"/auth/register"}>registrate</Link>
      </Typography>
    </AuthLayout>
  );
};
