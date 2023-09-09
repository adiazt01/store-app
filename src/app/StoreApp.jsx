import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../router/AppRouter";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { CssBaseline } from "@mui/material";

export const StoreApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline>
          <AppRouter />
        </CssBaseline>
      </BrowserRouter>
    </Provider>
  );
};
