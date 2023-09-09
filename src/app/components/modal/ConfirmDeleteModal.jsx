import { ArrowBack, Delete } from "@mui/icons-material";
import { Button, Grid, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startDeleteProduct } from "../../../store/slices/products/thunk";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ConfirmDeleteModal = ({ handleClose, openModal }) => {
  const { productName, idProduct, loading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const onDeleteButton = () => {
    dispatch(startDeleteProduct(idProduct));
  };

  return (
    <>
      <Modal open={openModal}>
        <Grid container sx={style} justifyContent={"center"}>
          <Grid item>
            <Typography textAlign={"center"} variant="h6" component="h2">
              ¿Estas seguro de eliminar el {productName}?
            </Typography>
            <Typography textAlign={"center"} sx={{ mt: 2 }}>
              El {productName} se eliminara y no podras recuperarlo.
            </Typography>
          </Grid>
          <Grid container item mt={3} justifyContent={"space-around"}>
            <Button
              variant="outlined"
              color="success"
              startIcon={<ArrowBack />}
              onClick={handleClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              disabled={loading}
              onClick={onDeleteButton}
              variant="outlined"
              color="error"
              startIcon={<Delete />}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};
