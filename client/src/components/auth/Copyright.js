
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link target='_blank' color="inherit" to="https://iamnur.netlify.app">
                Ashanur Hossain
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;