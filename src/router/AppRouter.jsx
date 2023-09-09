import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { useCheckAuth } from "../auth/hooks";
import { CheckingAuth } from "../interface/components/CheckingAuth";
import { StoreRoutes } from "../app/router/StoreRoutes";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<StoreRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
