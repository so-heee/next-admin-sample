import { Container, Box, TextField, Button, Link } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import SimpleLayout from '../components/layouts/simple/SimpleLayout'
import Logo from '../components/atoms/Logo'

export default function Home(): JSX.Element {
  return (
    <SimpleLayout title="ログイン">
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo color="primary" sx={{ fontSize: 130 }} />
          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              //   name="email"
              //   autoComplete="admin email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">@gmail.com</InputAdornment>
                ),
              }}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              //   name="password"
              label="Password"
              //   type="password"
              id="password"
              //   autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              disableElevation
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" underline="none">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" underline="none">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </SimpleLayout>
  )
}
