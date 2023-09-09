import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AttachMoney,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Inventory2,
  Payment,
  Sell,
  Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { useState } from "react";

const drawerWidth = 210;

export const Sidebar = () => {
  /* Se requiere componetizar */

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const sideBarProductsLinks = [
    {
      id: 0,
      label: "Inicio",
      func: () => navigate("/"),
      icon: <Dashboard />,
    },
    {
      id: 2,
      label: "Productos",
      func: () => navigate("/"),
      icon: <Inventory2 />,
    },
  ];

  const sideBarLiks = [
    {
      id: 1,
      label: "Configuracion",
      func: () => console.log("Hola mundo"),
      icon: <Settings />,
    },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>
        {sideBarProductsLinks.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
        <ListItemButton onClick={handleOpen}>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText primary="Almacen" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Payment />
              </ListItemIcon>
              <ListItemText primary="Pagos" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/sales/dashboard")} sx={{ pl: 4 }}>
              <ListItemIcon>
                <Sell />
              </ListItemIcon>
              <ListItemText primary="Ventas" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {sideBarLiks.map((item) => (
          <SidebarItem key={item.id} {...item} />
        ))}
      </List>
    </Drawer>
  );
};
