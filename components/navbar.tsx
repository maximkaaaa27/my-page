'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = {
  '/': {
    name: 'About',
  },
  '/edu': {
    name: 'Education',
  },
  '/experience': {
    name: 'Experience',
  },
  '/skills': {
    name: 'Skills',
  },
};

export default function NavAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <MenuItem
                    component={Link}
                    key={path}
                    href={path}
                    sx={{ margin: 2 }}
                  >
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Button
                  component={Link}
                  key={path}
                  href={path}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {name}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
