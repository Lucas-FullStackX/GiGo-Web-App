import {
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import React, { ReactElement, useState } from 'react';

/**
 *  @returns {void} -Change modal state.
 */
export function NavBar(): ReactElement {
  const [open, setOpen] = useState(false);
  /**
   *  @returns {void} -Change modal state.
   */
  const toggleDrawer = (): void => setOpen(!open);
  /**
   *  @returns {ReactElement} -Change modal state.
   */
  const Menu = (): ReactElement => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="test" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button onClick={() => setOpen(!open)}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={open} onClose={() => setOpen(!open)}>
          <Menu />
        </Drawer>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
