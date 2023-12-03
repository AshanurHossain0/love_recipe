import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {setToast} from "../store/toastSlice";

import {loginValidate,regValidate} from "../script/validation"

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from '../components/auth/Copyright';
import Toast from '../components/Toast';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Typography from '@mui/material/Typography';


import { createTheme, ThemeProvider } from '@mui/material/styles';



const defaultTheme = createTheme();

function UserAuth() {
  const [reg, setReg] = useState(false);
  const [regInfo, setRegInfo] = useState({email:"",password:"",name:"",city:""});
  const [loginInfo, setLoginInfo] = useState({email:"",password:""});
  const [logError, setLogError] = useState({status:false,msg:"ok"});
  const [regError, setRegError] = useState({status:false,msg:"ok"});
  const dispatch=useDispatch();

  const handleChange=(event)=>{
    if(reg){
      setRegInfo(info=>({...info,[event.target.name]:event.target.value}))
    }
    else{
      setLoginInfo(info=>({...info,[event.target.name]:event.target.value}))
    }
  }

  useEffect(()=>{
    regValidate({...regInfo,setRegError})
  },[regInfo,loginInfo])
  useEffect(()=>{
    loginValidate({...loginInfo,setLogError});
  },[loginInfo])

  const handleSubmit = (event) => {
    event.preventDefault();
    if(reg){
      if(regError.status){
        dispatch(setToast({isToastOpen:true,message:regError.msg,severity:"error"}))
        return;
      }
      console.log(regInfo);
    }
    else{
      if(logError.status){
        dispatch(setToast({isToastOpen:true,message:logError.msg,severity:"error"}))
        return;
      }
      console.log(loginInfo);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 1
            }}
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Avatar sx={{ m: 1, mt: 3, bgcolor: 'secondary.main' }}>
              {reg ? <AppRegistrationIcon /> : <LockOutlinedIcon />}
            </Avatar>
            <Typography component="h1" variant="h5">
              {reg ? "Sign up" : "Sign in"}
            </Typography>

            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant='standard'
              error={reg?((!regInfo.email.includes('.')||regInfo.email.length<4) && regInfo.email.length!=0):((!loginInfo.email.includes('.')||loginInfo.email.length<4) && loginInfo.email.length !=0)}
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant='standard'
              error={reg?(regInfo.password.length<5 && regInfo.password.length!=0 ):(loginInfo.password.length<5 &&loginInfo.password.length!=0)}
            />
            {reg &&
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                name="name"
                label="Full Name"
                type="text"
                id="name"
                autoComplete="Ashanur Hossain"
                variant='standard'
                error={regInfo.name.length<3 && regInfo.name.length !=0}
              />
            }
            {reg &&
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                name="city"
                label="City Name"
                type="text"
                id="city"
                autoComplete="Kolkata"
                variant='standard'
              />
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {
                  reg ? (
                    <Button onClick={() => setReg(false)}>
                      {"Already have an account? Sign In"}
                    </Button>
                  ) : (
                    <Button onClick={() => setReg(true)}>
                      {"Don't have an account? Sign Up"}
                    </Button>
                  )
                }
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
      <Toast />
    </ThemeProvider>
  )
}

export default UserAuth;