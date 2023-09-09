import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { useToggleMenu } from "../../interface/hooks/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunk";

export const Navbar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const { handleClick, handleClose, open, anchorEl } = useToggleMenu();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
    handleClose();
  };

  const menuItems = [{ label: "Logout", id: 2, onClick: () => onLogout() }];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>{displayName}</Typography>
          <Box
            display={"flex"}
            sx={{ width: "100%" }}
            justifyContent={"right"}
          ></Box>
          <Tooltip title="Abrir configuracion">
            <IconButton onClick={handleClick}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
            {menuItems.map((item) => (
              <MenuItem onClick={item.onClick} key={item.id}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
