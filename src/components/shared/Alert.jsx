import { Snackbar, Alert as MuiAlert } from "@mui/material";
import React from "react";

const Alert = ({ open, message, type = "info", onClose, duration = 4000 }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // position
    >
      <MuiAlert
        onClose={onClose}
        severity={type} // "success" | "error" | "warning" | "info"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;

