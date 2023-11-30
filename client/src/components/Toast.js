import { Alert, Snackbar } from '@mui/material';
import React from 'react'

function Toast({ open,setOpen, message }) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar
                autoHideDuration={2000}
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={message}
                onClose={handleClose}
            />
        </>
    )
}

export default Toast