import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { LOGIN_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import login from '../../services/login'
import { containedButtonStyle, outlinedButtonStyle } from '../../styles/buttons'
import { mainContainer, containerV1 } from '../../styles/containers'

export default function Login() {
  const router = useRouter()

  const [apiMessage, setApiMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    const res = await login(email, password)

    const errorMessage = res?.data?.message
    const status = res?.status

    setApiMessage(errorMessage)

    setTimeout(() => { setApiMessage('') }, 5000)

    if (status === 200) {
      setTimeout(() => { router.push('/dashboard') }, 1000)
    } else {
      setLoading(false)
    }
  }

  return (
    <>
      <CustomHead title="Login" description={LOGIN_PAGE_DESCRIPTION} />

      <Box sx={mainContainer}>
        <Box
          sx={containerV1}
          component="form"
          id="login-form"
        >
          <Stack
            spacing={2}
            alignItems="center"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <TextField
              name='password'
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
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

            <Typography
              variant="body2"
              color="text.primary"
              sx={{ fontWeight: 300, }}
              align="center"
            >
              Forgot password? <Link href="/forgot-password">Reset</Link>
            </Typography>

            <Stack
              spacing={1}
              alignItems="center"
              sx={{ width: '100%' }}
            >
              <Button
                variant="text"
                sx={outlinedButtonStyle}
                disabled={loading}
                onClick={(e) => handleLogin(e)}
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
          </Stack>
        </Box>
      </Box>
    </>
  )
}
