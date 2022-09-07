import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { REGISTER_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import { containedButtonStyle, outlinedButtonStyle } from '../../styles/buttons'
import { mainContainer, containerV1 } from '../../styles/containers'
import { inputStyle } from '../../styles/inputs'

export default function Register() {
  const [apiMessage, setApiMessage] = useState('This is a message from the API')

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <>
      <CustomHead title="Register" description={REGISTER_PAGE_DESCRIPTION} />

      <Box sx={mainContainer}>
        <Box
          sx={containerV1}
          component="form"
          id="register-form"
        >
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 700, mb: 1 }}
            align="center"
          >
            Register now
          </Typography>

          <TextField
            name='fullName'
            label='Full Name'
            type='text'
            variant='outlined'
            fullWidth
            sx={inputStyle}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <TextField
            name='username'
            label='Username'
            type='text'
            variant='outlined'
            fullWidth
            sx={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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

          <TextField
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            variant='outlined'
            fullWidth
            sx={inputStyle}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontWeight: 700, mb: 2, }}
            align="center"
          >
            {apiMessage}
          </Typography>

          <Stack
            spacing={1}
            sx={{ mt: 2, alignItems: 'center' }}
          >
            <Button
              variant="text"
              href="/dashboard"
              sx={containedButtonStyle}
            >
              Register
            </Button>

            <Button
              sx={outlinedButtonStyle}
              variant="text"
              href="/login"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
