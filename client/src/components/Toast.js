import { Alert, Snackbar, colors } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { setToast } from '../store/toastSlice';

import React from 'react'

function Toast() {

    const dispatch=useDispatch();
    const {isToastOpen,message,severity}=useSelector(state=>state.toast)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setToast({isToastOpen:false}));
    };

    return (
        <>
            <Snackbar
                autoHideDuration={2000}
                open={isToastOpen}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                sx={{ backgroundColor: colors.teal }}
                severity="error"
            >
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Toast