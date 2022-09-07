import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { LOGIN_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import { containedButtonStyle, outlinedButtonStyle } from '../../styles/buttons'
import { mainContainer, containerV1 } from '../../styles/containers'
import { inputStyle } from '../../styles/inputs'

export default function Login() {
  const [apiMessage, setApiMessage] = useState('This is a message from the API')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <CustomHead title="Login" description={LOGIN_PAGE_DESCRIPTION} />

      <Box sx={mainContainer}>
        <Box
          sx={containerV1}
          component="form"
          id="login-form"
        >
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 700 }}
            align="center"
          >
            Welcome back
          </Typography>

          <TextField
            name='email'
            label='Email'
            type='email'
            variant='outlined'
            fullWidth
            sx={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            fullWidth
            sx={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontWeight: 700, mb: 2, }}
            align="center"
          >
            {apiMessage}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontWeight: 300, mb: 2, }}
            align="center"
          >
            Forgot password? <Link href="/forgot-password">Reset</Link>
          </Typography>

          <Stack
            spacing={1}
            sx={{ mt: 2, alignItems: 'center' }}
          >
            <Button
              variant="text"
              sx={outlinedButtonStyle}
              href="/dashboard"
              disabled={!(email && password)}
            >
              Login
            </Button>

            <Button
              variant="text"
              sx={containedButtonStyle}
              href="/register"
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
