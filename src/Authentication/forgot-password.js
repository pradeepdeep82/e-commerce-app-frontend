import { Link, useHistory } from "react-router-dom";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API_URL } from "../Components/global-constants";

export function ForgotPassword() {
  const history = useHistory();
 const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get('email')
    };
    console.log(user);

    const forgotPassword = (user) => {
      // fetch("http://localhost:7000/login/forgot-password", {
        fetch(`${API_URL}/login/forgot-password`, {
         method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
        .then(data => data.json())
        .then((data) => {
          console.log(data);
          if (data.statusCode === 200) {
            alert(data.message);
            console.log(data.message);
            history.push("/login");
          } else {
            alert(data.message);
            console.log(data.message);
            history.push("/signup");
          }
        });
    };
    forgotPassword(user);

  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                forgot password
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={() => history.push("/login")} href="#" variant="body2">
                    Sign In
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={() => history.push("/signup")} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
