import {
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import type { UserModel } from "../../dto/user.dto";
import { usePagination } from "../../hooks/usePagination";
import UserFormModal from "../UseFormModal";
import DeleteConfirmDialog from "../DeleteConfirmDialog";
import { UserHeader } from "../UserHeader";
import { useFilteredUsers } from "../../hooks/useFilteredUsers";
import { PaginationControls } from "../PaginationControls";

interface UserCardsProps {
  users?: UserModel[];
}

export default function UserCards({ users = [] }: UserCardsProps) {
  const [filter, setFilter] = useState("");
  const [selectedUser, setSelectedUser] = useState<UserModel | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<UserModel | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const filteredUsers = useFilteredUsers({
    users,
    filter,
  });

  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    isFirstPage,
    isLastPage,
  } = usePagination({
    data: filteredUsers,
    itemsPerPage,
  });

  return (
    <Box sx={{ p: 2 }}>
      <UserHeader
        filter={filter}
        setFilter={setFilter}
        onAddUser={() => {
          setSelectedUser(null);
          setIsFormOpen(true);
        }}
      />
      {paginatedData.map((user) => (
        <Card
          key={user.id}
          sx={{
            mb: 2,
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                mb: 1,
              }}
            >
              <Box>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>

              <Chip
                label={user.status === "ativo" ? "Ativo" : "Inativo"}
                color={user.status === "ativo" ? "success" : "default"}
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1,
                mt: 1,
              }}
            >
              <Tooltip title="Editar Usuário" arrow>
                <IconButton
                  onClick={() => {
                    setSelectedUser(user);
                    setIsFormOpen(true);
                  }}
                >
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Excluir Usuário" arrow>
                <IconButton onClick={() => setDeleteTarget(user)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      ))}
      <PaginationControls
        size="small"
        currentPage={currentPage}
        totalPages={totalPages}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        nextPage={nextPage}
        prevPage={prevPage}
        itemsPerPage={itemsPerPage}       // 👈 novo
        setItemsPerPage={setItemsPerPage} // 👈 novo
      />
      <UserFormModal
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        editingUser={selectedUser ?? undefined}
      />


      <DeleteConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        user={deleteTarget}
      />
    </Box>
  );
}
