import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const SidebarItem = ({ label, icon, func }) => {
  return (
    <ListItem disablePadding alignItems="flex-start" onClick={func}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
