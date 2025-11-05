import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useThemeMode } from "./hooks/useThemeMode";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import Header from "./components/Header";
import { Box, CircularProgress } from "@mui/material";
import { UserList } from "./components/userList/UserList";
import { UserProvider } from "./context/UserProvider";
import Hero from "./components/Hero";
import  { Suspense } from "react";
import { buildTheme } from "./theme";
import Footer from "./components/Footer";

function App() {
  const mode = useThemeMode();
  const theme = buildTheme(mode);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster position="top-right" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              minHeight: "100vh",
              width: "100%",
              bgcolor: "background.default",
              color: "text.primary",
              transition: "background-color 0.3s ease",
            }}
          >
            <Header />
            <Suspense
              fallback={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 10,
                    gap: 2,
                  }}
                >
                  <CircularProgress
                    size={48}
                    sx={{
                      color: "primary.main",
                      animation: "pulse 1.5s ease-in-out infinite",
                      "@keyframes pulse": {
                        "0%": { transform: "scale(1)" },
                        "50%": { transform: "scale(1.2)" },
                        "100%": { transform: "scale(1)" },
                      },
                    }}
                  />
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 600,
                      background:
                        "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundSize: "200% 200%",
                      animation: "gradientMove 6s linear infinite",
                      "@keyframes gradientMove": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                      },
                    }}
                  >
                    Carregando painel de usuários...
                  </Box>
                </Box>
              }
            >
              <Hero />
              <UserList />
              <Footer />
            </Suspense>
          </Box>
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
