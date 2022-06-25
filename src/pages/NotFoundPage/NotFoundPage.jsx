import React from "react";
import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "48vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Такой странички нет =(</Typography>
    </Box>
  );
};

export default NotFoundPage;
