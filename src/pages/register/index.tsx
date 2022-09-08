import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { REGISTER_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import { register } from '../../services/register'
import { containedButtonStyle, outlinedButtonStyle } from '../../styles/buttons'
import { mainContainer, containerV1 } from '../../styles/containers'

export default function Register() {
  const router = useRouter()

  const [apiMessage, setApiMessage] = useState('')

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRegister = async (e: any) => {
    e.preventDefault()

    const data = {
      fullName,
      username,
      email,
      password,
      confirmPassword,
    }

    const res = await register(data)

    const errorMessage = res?.data?.message
    const status = res?.status

    setApiMessage(errorMessage)

    setTimeout(() => { setApiMessage('') }, 5000)

    if (status === 201) {
      setFullName('')
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

      setTimeout(() => { router.push('/login') }, 1000)
    }
  }

  return (
    <>
      <CustomHead title="Register" description={REGISTER_PAGE_DESCRIPTION} />

      <Box sx={mainContainer}>
        <Box
          sx={containerV1}
          component="form"
          id="register-form"
        >
          <Stack spacing={2}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ fontWeight: 700, }}
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextField
              name='username'
              label='Username'
              type='text'
              variant='outlined'
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              name='email'
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              name='password'
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              variant='outlined'
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {
              apiMessage && (
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ fontWeight: 700, }}
                  align="center"
                >
                  {apiMessage}
                </Typography>
              )
            }

            <Stack
              spacing={1}
              alignItems="center"
            >
              <Button
                variant="text"
                sx={containedButtonStyle}
                onClick={(e) => handleRegister(e)}
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
          </Stack>
        </Box>
      </Box>
    </>
  )
}
