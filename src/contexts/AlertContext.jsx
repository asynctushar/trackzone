import React, { createContext, useContext, useState, useCallback } from "react";
import Alert from "../components/shared/Alert";

const AlertContext = createContext();



export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ open: false, message: "", type: "info" });

    const showAlert = useCallback((message, type = "info") => {
        setAlert({ open: true, message, type });
    }, []);

    const handleClose = () => {
        setAlert((prev) => ({ ...prev, open: false }));
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            <Alert
                open={alert.open}
                type={alert.type}
                message={alert.message}
                onClose={handleClose}
            />
        </AlertContext.Provider>
    );
};


export const useAlert = () => useContext(AlertContext);