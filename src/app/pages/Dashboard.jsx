import { ProductCard } from "../components/cards/ProductCard";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Fab
        sx={{ position: "fixed", bottom: "50px", right: "50px" }}
        color="primary"
        aria-label="add"
        onClick={() => navigate("/products/create")}
      >
        <Add />
      </Fab>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </>
  );
};
