import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AppLayout } from "../layout/AppLayout";
import { ProducstUpdateForm, ProductsForm } from "../pages/products";
import { SalesDashboard } from "../pages/sales/SaleDashboard";
import { SaleRegister } from "../pages/sales/SaleRegister";

export const StoreRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        {/* Products Routes */}
        <Route path="/products/create" element={<ProductsForm />} />
        <Route path="/products/update" element={<ProducstUpdateForm />} />
        <Route path="/products/*" element={<Navigate to="/" />} />
        {/* Sales Routes */}
        <Route path="/sales/dashboard" element={<SalesDashboard />} />
        <Route path="/sales/register" element={<SaleRegister />} />
        <Route path="/sales/*" element={<Navigate to="/" />} />
        {/* Another */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AppLayout>
  );
};
