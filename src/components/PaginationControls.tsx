import {
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  nextPage: () => void;
  prevPage: () => void;
  size?: "small" | "medium";
  itemsPerPage?: number;
  setItemsPerPage?: (value: number) => void;
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  size = "medium",
  itemsPerPage,
  setItemsPerPage,
}: PaginationControlsProps) => {
  const isSmall = size === "small";

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={isSmall ? 1.5 : 2.5}
      py={isSmall ? 1 : 2}
      px={2}
      sx={{
        borderTop: (theme) =>
          theme.palette.mode === "light"
            ? "1px solid rgba(0,0,0,0.05)"
            : "1px solid rgba(255,255,255,0.08)",
        mt: 2,
      }}
    >
      {/* 🧩 Select à ESQUERDA */}
      {setItemsPerPage && itemsPerPage !== undefined && (
        <FormControl
          size={isSmall ? "small" : "medium"}
          sx={{
            minWidth: isSmall ? 80 : 120,
          }}
        >
          <Select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            sx={{
              borderRadius: "10px",
              fontWeight: 500,
              fontSize: isSmall ? "0.8rem" : "0.9rem",
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.05)",
              color: (theme) => theme.palette.text.primary,
              "& .MuiSelect-icon": {
                color: (theme) => theme.palette.text.secondary,
              },
            }}
          >
            {[5, 10, 20, 50].map((n) => (
              <MenuItem key={n} value={n}>
                {n} por página
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* ⏩ Botões à DIREITA */}
      <Box display="flex" alignItems="center" gap={isSmall ? 1.5 : 2.5}>
        <Button
          onClick={prevPage}
          disabled={isFirstPage}
          sx={{
            px: isSmall ? 2 : 3,
            py: isSmall ? 0.5 : 1,
            fontSize: isSmall ? "0.85rem" : "0.95rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(59,130,246,0.1)"
                : "rgba(59,130,246,0.15)",
            color: "#3b82f6",
            "&:hover": {
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.15), rgba(124,58,237,0.15))",
            },
            "&.Mui-disabled": {
              opacity: 0.4,
            },
          }}
        >
          Anterior
        </Button>

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: isSmall ? "0.85rem" : "0.95rem",
            background: "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 8s linear infinite",
            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        >
          Página {currentPage} de {totalPages}
        </Typography>

        <Button
          onClick={nextPage}
          disabled={isLastPage}
          sx={{
            px: isSmall ? 2 : 3,
            py: isSmall ? 0.5 : 1,
            fontSize: isSmall ? "0.85rem" : "0.95rem",
            fontWeight: 600,
            borderRadius: "10px",
            textTransform: "none",
            background: "linear-gradient(90deg, #3b82f6, #7c3aed)",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            "&:hover": {
              background: "linear-gradient(90deg, #2563eb, #6d28d9)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
            },
            "&.Mui-disabled": {
              opacity: 0.4,
            },
          }}
        >
          Próximo
        </Button>
      </Box>
    </Box>
  );
};
