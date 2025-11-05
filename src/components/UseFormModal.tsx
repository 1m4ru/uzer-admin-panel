import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  MenuItem,
  Divider,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form"; 
import { useCreateUser, useUpdateUser } from "../services/userService";
import toast from "react-hot-toast";
import { useFormValidation } from "../hooks/useFormValidation";
import { userSchema, type UserFormSchema } from "../validations/userSchemas";
import type { UserModel } from "../dto/user.dto";

interface UserFormModalProps {
  open: boolean;
  onClose: () => void;
  editingUser?: UserModel;
}

export default function UserFormModal({
  open,
  onClose,
  editingUser,
}: UserFormModalProps): React.ReactElement {
  const theme = useTheme();
  const { mutate: createUser, isPending: creating } = useCreateUser();
  const { mutate: updateUser, isPending: updating } = useUpdateUser();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormValidation<UserFormSchema>(userSchema);

  useEffect(() => {
    if (editingUser) {
      reset({
        name: editingUser.name ?? "",
        email: editingUser.email ?? "",
        status: editingUser.status ?? "ativo",
      });
    } else {
      reset({ name: "", email: "", status: "ativo" });
    }
  }, [editingUser, open, reset]);

  const onSubmit = (data: UserFormSchema) => {
    if (editingUser?.id) {
      updateUser(
        { id: editingUser.id, ...data },
        {
          onSuccess: () => {
            toast.success("Usuário atualizado com sucesso!");
            onClose();
          },
          onError: () => toast.error("Erro ao atualizar o usuário!"),
        }
      );
    } else {
      createUser(data, {
        onSuccess: () => {
          toast.success("Usuário criado com sucesso!");
          onClose();
        },
        onError: () => toast.error("Erro ao criar o usuário!"),
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.85)"
              : "rgba(25,25,25,0.6)",
          backdropFilter: "blur(12px)",
          borderRadius: 4,
          boxShadow:
            theme.palette.mode === "light"
              ? "0 8px 32px rgba(0,0,0,0.08)"
              : "0 8px 32px rgba(0,0,0,0.6)",
          border:
            theme.palette.mode === "light"
              ? "1px solid rgba(0,0,0,0.05)"
              : "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          textAlign: "center",
          background:
            "linear-gradient(90deg, #3b82f6, #7c3aed, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        {editingUser ? "Editar Usuário" : "Novo Usuário"}
      </DialogTitle>

      <Divider
        sx={{
          borderColor:
            theme.palette.mode === "light"
              ? "rgba(59,130,246,0.2)"
              : "rgba(124,58,237,0.2)",
          mb: 2,
        }}
      />

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Nome"
            fullWidth
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background:
                  theme.palette.mode === "light"
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.08)",
              },
            }}
          />

          <TextField
            label="E-mail"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background:
                  theme.palette.mode === "light"
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.08)",
              },
            }}
          />

          <Controller
            name="status"
            control={control}
            defaultValue="ativo" 
            render={({ field }) => (
              <TextField
                select
                label="Status"
                fullWidth
                variant="outlined"
                {...field}
                error={!!errors.status}
                helperText={errors.status?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.08)",
                  },
                }}
              >
                <MenuItem value="ativo">Ativo</MenuItem>
                <MenuItem value="inativo">Inativo</MenuItem>
              </TextField>
            )}
          />
        </Box>
      </DialogContent>

      <DialogActions
        sx={{
          px: 3,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          disabled={creating || updating}
          sx={{
            color: "#7c3aed",
            borderColor: "rgba(124,58,237,0.3)",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: "#7c3aed",
              background:
                "linear-gradient(90deg, rgba(124,58,237,0.08), rgba(59,130,246,0.08))",
            },
          }}
        >
          Cancelar
        </Button>

        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          disabled={creating || updating}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: "10px",
            background: "linear-gradient(90deg, #3b82f6, #7c3aed)",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            "&:hover": {
              background: "linear-gradient(90deg, #2563eb, #6d28d9)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
            },
          }}
        >
          {creating || updating ? "Salvando..." : editingUser ? "Atualizar" : "Criar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
