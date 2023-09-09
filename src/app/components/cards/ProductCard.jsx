import {
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { activeProduct } from "../../../store/slices/products/productsSlice";
import { useNavigate } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";
import { ConfirmDeleteModal } from "../modal/ConfirmDeleteModal";
import { useToggleModal } from "../../../interface/hooks/useToggleModal";

export const ProductCard = ({ productName, priceProduct, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleClose, handleOpen, openModal } = useToggleModal();

  const onClickEdit = () => {
    dispatch(activeProduct({ productName, priceProduct, idProduct: id }));
    navigate("/products/update");
  };

  const onClickDelete = () => {
    dispatch(activeProduct({ productName, priceProduct, idProduct: id }));
    handleOpen();
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 200 }}>
        <CardContent sx={{ marginBottom: "-20px" }}>
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h5"
            component="div"
            mb={0.5}
          >
            {productName}
            <Typography mt={1} variant="h5" color="green">
              {priceProduct} Bsf
            </Typography>
          </Typography>
          <Divider />
        </CardContent>
        <CardActions
          sx={{ marginBottom: "-1px", justifyContent: "space-around" }}
        >
          <IconButton onClick={onClickEdit}>
            <Edit />
          </IconButton>
          <IconButton onClick={onClickDelete}>
            <Delete />
          </IconButton>
        </CardActions>
      </Card>
      <ConfirmDeleteModal handleClose={handleClose} openModal={openModal} />
    </>
  );
};
