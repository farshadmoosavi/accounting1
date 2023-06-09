import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lock from '../images/lock.webp';
import { useState } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Hesaban.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  typography: {
    fontFamily: '"Noto Sans Arabic", sans-serif',
  },
});

export default function SignIn() {

  const [account, setAccount] = useState({
    userName: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className='login-form-box' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={lock}
            alt="Your Picture"
            style={{ width: 120, height: 120, borderRadius: '50%' }}
          />
          <Typography component="h1" variant="h5">
              ورود به حساب کاربری
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="نام کاربری"
              name="userName"
              autoComplete="userName"
              autoFocus
              align="right"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel className='remember-me-form'
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ textDecoration: 'none' }} >
                  {"گزارش مسدودی حساب کاربری"}
                </Link>

              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                  رمز عبور را فراموش کرده ام
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
