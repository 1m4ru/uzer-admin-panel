import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import womanLaptop from "../assets/woman_laptop.png";

export default function Hero() {
  const gradientText = {
    background: "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        mt: 6,
        mx: { xs: 2, md: 6 },
        borderRadius: "24px",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(240, 246, 255, 0.8)"
            : "rgba(255,255,255,0.03)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.04)",
        backdropFilter: "blur(8px)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            component={motion.h3}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            sx={{
              mb: 2,
              lineHeight: 1.2,
              background:
                "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Bem-vindo ao Painel de Usuários
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 620,
              fontWeight: 400,
              lineHeight: 1.6,
              fontSize: { xs: "1rem", md: "1.125rem" },
              letterSpacing: "0.01em",
            }}
          >
            <Box
              component={motion.span}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 9,
                ease: "linear",
                repeat: Infinity,
              }}
              sx={gradientText}
            >
              Centralize informações, defina acessos e acompanhe sua equipe com
              eficiência.
            </Box>
            <br />
            <Box
              component={motion.span}
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 11,
                ease: "linear",
                repeat: Infinity,
              }}
              sx={{
                ...gradientText,
                display: "block",
                mt: 1,
                fontWeight: 500,
              }}
            >
              Um painel pensado para simplificar a gestão e potencializar
              resultados.
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={womanLaptop}
            alt="Profissional utilizando notebook"
            style={{
              borderRadius: "16px",
              width: "100%",
              maxWidth: "450px",
              objectFit: "cover",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 6px 24px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.08)";
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
