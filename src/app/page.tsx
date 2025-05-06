"use client";

import { Box, Typography, useMediaQuery, useTheme, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Navigation items
  const navItems = ["Mission", "What We Do", "What You Can Do", "Donate", "Contact"];
  
  // Images from public directory, ordered 1-6
  const imageUrls = [
    "/1.jpg",
    "/2.jpg", 
    "/3.jpg",
    "/4.jpg",
    // "/5.jpg",
    "/6.jpg",
  ];

  // Animation variants for the scrapbook images
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #03202f 0%, #071a26 100%)',
      minHeight: '100vh',
      color: 'white',
    }}>
      {/* Header Component */}
      <Header navItems={navItems} />
      
      {/* Main Content */}
      <Box sx={{ 
        paddingTop: "64px",
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        minHeight: "calc(100vh - 64px)"
      }}>
        {/* Left Side - Fixed panel with header and photos at bottom */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{ 
            position: isMobile ? "static" : "fixed",
            width: isMobile ? "100%" : "50%",
            height: isMobile ? "70vh" : "calc(100vh - 64px)",
            top: "64px",
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: 'linear-gradient(145deg, rgba(3, 32, 47, 0.9) 0%, rgba(10, 40, 65, 0.8) 100%)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: isMobile ? "auto" : "hidden",
            padding: isMobile ? "2rem" : 0,
            paddingBottom: isMobile ? "4rem" : 0,
          }}
        >
          {/* Top section with title and intro */}
          <Box sx={{ 
            padding: isMobile ? 0 : "1rem 3rem",
            paddingBottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: 'relative'
          }}>
            <Box sx={{position: 'absolute', top: '2.5rem', right: isMobile ? '-1rem' : '1rem'}}
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Box sx={{ 
                mr: 3, 
                width: isMobile ? 80 : 160,
                height: isMobile ? 80 : 160,
                borderRadius: '50%', 
                background: 'white',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',

              }}>
                <Image
                  src="/logo.png"
                  alt="Coach's Cuts logo"
                  width={isMobile ? 70 : 150}
                  height={isMobile ? 70 : 150}
                  style={{
                    objectFit: "contain",
                    padding: 3,
                  }}
                />
              </Box>
            </Box>

            <Box 
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography 
                component="span" 
                sx={{ 
                  fontFamily: theme.typography.h1.fontFamily,
                  letterSpacing: '0.1em',
                  fontSize: isMobile ? '1.1rem' : '1.4rem',
                  color: '#A71930',
                  fontWeight: 900,
                }}
              >
                HELPING THE HOUSTON COMMUNITY
              </Typography>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  lineHeight: 1.2,
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  mt: 1,
                  mb: 1,
                  maxWidth: '600px',
                  backgroundImage: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Coach&apos;s Cuts
                <Typography 
                  variant="h5" 
                  component="span" 
                  sx={{ 
                    display: 'block',
                    mt: .25,
                    fontWeight: 400,
                    opacity: 0.9,
                    backgroundImage: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.7) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  One Haircut at a Time
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: isMobile ? 8 : 4,
                  maxWidth: '550px',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                Bringing dignity, medical care, and essential services to Houston&apos;s homeless community through professional haircuts and compassionate support.
              </Typography>
            </motion.div>
          </Box>
          
          {/* Scrapbook Images at bottom */}
          <Box 
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            sx={{ 
              padding: isMobile ? "2rem 0" : "1rem 2rem 0rem",
              position: "relative",
              height: isMobile ? "75vh" : "95vh",
              marginTop: "auto",
            }}
          >            
            <Box 
              sx={{ 
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {imageUrls.map((url, index) => {
                // Calculate positions for scrapbook effect
                const positions = [
                  { top: isMobile ? '-45%' : '-5%', left: '5%', zIndex: 6, rotate: -8 },
                  { top: '10%', left: '25%', zIndex: 8, rotate: 5 },
                  { top: isMobile ? '-35%' : '-3%', left: '55%', zIndex: 4, rotate: -6 },
                  { top: '35%', left: '0%', zIndex: 7, rotate: 7 },
                  { top: isMobile ? '60%' : '45%', left: '60%', zIndex: 2, rotate: -5 },
                  // { top: '40%', left: '60%', zIndex: 1, rotate: 9 },
                ];
                
                const pos = positions[index];
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      rotate: pos.rotate * 1.2,
                      zIndex: 10,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      zIndex: pos.zIndex,
                      transformOrigin: "center",
                      rotate: pos.rotate * .5,
                      transform: `rotate(${pos.rotate}deg)`,
                      width: isMobile ? "40%" : "35%",
                    }}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        overflow: "hidden",
                        aspectRatio: "1/1",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderRadius: "4px",
                        border: "5px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                        "&:hover": {
                          boxShadow: "0 15px 40px rgba(0,0,0,0.6)",
                        },
                        position: "relative",
                      }}
                    >
                      <Image
                        src={url}
                        alt={`Coach Ross Cuts event image ${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </Paper>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </Box>
        
        {/* Right Side - Scrollable Content */}
        <Box sx={{ 
          marginLeft: isMobile ? 0 : "50%",
          width: isMobile ? "100%" : "50%",
          minHeight: isMobile ? "50vh" : "calc(100vh - 64px)",
          padding: isMobile ? "1.5rem" : "3rem 4rem",
          background: '#050e15',
        }}>
          <InfoSection isMobile={isMobile}/>
        </Box>
      </Box>
    </Box>
  );
}