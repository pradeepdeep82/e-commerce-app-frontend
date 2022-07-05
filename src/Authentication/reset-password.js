import { useHistory, useParams } from "react-router-dom";
import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { API_URL } from "../Components/global-constants";

export function ResetPassword() {
  const history = useHistory();
  const { username, token } = useParams();
  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = {
      password: data.get('password'),
      confirmPassword: data.get("confirmPassword")
    };
    console.log(password);
    const resetPassword = () => {
      //  fetch(`http://localhost:7000/reset-password/${username}/${token}`,{
      fetch(`${API_URL}/reset-password/${username}/${token}`, {
        method: "POST",
        headers: {
          "content-Type": "application/json"
        },
        body: JSON.stringify(password)
      })
        .then(data => data.json())
        .then((data) => {
          if (data.statusCode === 400) {
            alert(data.message);
          } else if (data.statusCode === 402) {
            alert(data.message);
            history.push("/login/forgot-password");
          }
          else {
            alert(data.message);
            history.push("/login");
          }
        });
    };
    resetPassword();
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
              Reset Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"

                autoFocus />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                autoFocus />


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset password
              </Button>
              {/* <Grid container>
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
            </Grid> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
