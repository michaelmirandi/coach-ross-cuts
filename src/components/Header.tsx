"use client";

import { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

interface HeaderProps {
  navItems: string[];
}

export default function Header({ navItems }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Function to scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get the header height to use as offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 64;
      
      // Calculate the position to scroll to (element position - header height - extra padding)
      const offsetPosition = section.getBoundingClientRect().top + 
                            window.pageYOffset - 
                            headerHeight - 
                            60; // Additional padding
      
      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close drawer if open
      if (drawerOpen) setDrawerOpen(false);
    }
  };

  // Toggle drawer for mobile view
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(3, 32, 47, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
        }}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Toolbar>
          <Typography 
            variant="h5" 
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            sx={{ 
              flexGrow: 1,
              fontFamily: theme.typography.h1.fontFamily,
              letterSpacing: '0.05em',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Coach Ross Cuts
          </Typography>

          {/* Mobile menu button */}
          {isMobile ? (
            <IconButton 
              color="inherit" 
              onClick={toggleDrawer} 
              edge="end"
              component={motion.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Desktop navigation
            <Box component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {navItems.map((item, index) => (
                <Button 
                  key={item} 
                  color="inherit"
                  component={motion.button}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
                  sx={{ 
                    mx: 1,
                    opacity: 0.9,
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline'
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            background: 'rgba(3, 32, 47, 0.95)',
            backdropFilter: 'blur(10px)',
            width: 260,
            color: 'white',
          }
        }}
      >
        <Box
          sx={{ width: 260 }}
          role="presentation"
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton 
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
                  sx={{ 
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <ListItemText 
                    primary={item} 
                    primaryTypographyProps={{
                      sx: { 
                        fontFamily: theme.typography.h6.fontFamily,
                        letterSpacing: '0.03em',
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

          </List>
        </Box>
      </Drawer>
    </>
  );
}