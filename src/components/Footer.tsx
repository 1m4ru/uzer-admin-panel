import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <Box
      component="footer"
      sx={{
        width: "100vw",
        py: 3,
        px: 2,
        textAlign: "center",
        mt: "auto",
        borderTop: `1px solid ${
          isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)"
        }`,
        backgroundColor: isLight
          ? "rgba(255,255,255,0.7)"
          : "rgba(25,25,25,0.7)",
        backdropFilter: "blur(8px)",
        fontSize: "0.9rem",
        letterSpacing: "0.02em",
        position: "relative",
        left: 0,
      }}
    >
      <Typography
        variant="body2"
        component={motion.p}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
        sx={{
          background: "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          fontWeight: 500,
        }}
      >
        © {new Date().getFullYear()} Zucchetti User Panel — Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
