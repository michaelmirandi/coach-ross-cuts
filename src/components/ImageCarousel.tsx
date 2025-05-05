"use client";

import { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 5000 }: ImageCarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Placeholder images if no real images are provided
  const placeholderImages = [
    "https://placehold.co/800x1200/03202f/ffffff?text=Coach+Ross+Cuts",
    "https://placehold.co/800x1200/A71930/ffffff?text=Helping+Others",
    "https://placehold.co/800x1200/031a27/ffffff?text=One+Haircut+At+A+Time",
    "https://placehold.co/800x1200/8c1428/ffffff?text=Serving+Houston",
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: isMobile ? 0 : "0 16px 16px 0",
        boxShadow: isMobile ? "none" : "10px 0 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${displayImages[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(3, 32, 47, 0.4) 0%, rgba(3, 32, 47, 0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Dots indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 2,
        }}
      >
        {displayImages.map((_, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              backgroundColor: currentIndex === index ? "#A71930" : "rgba(255, 255, 255, 0.5)" 
            }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}