import { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { containedButtonStyle } from '../../styles/buttons'
import { containerV1, mainContainer } from '../../styles/containers'

export default function ForgotPassword() {
  const [apiMessage, setApiMessage] = useState('This is a message from the API')

  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={containerV1} component="form" id="reset-password-form">
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 700, mb: 2, }}
            align="center"
          >
            Enter your new password
          </Typography>

          <TextField
            name='new-password'
            label='New Password'
            type='password'
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
            }}
          />

          <TextField
            name='confirm-password'
            label='Confirm Password'
            type='password'
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
            }}
          />

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontWeight: 700, mb: 2, }}
            align="center"
          >
            {apiMessage}
          </Typography>

          <Button
            variant="text"
            color="primary"
            sx={{
              ...containedButtonStyle,
              mx: 'auto',
              display: 'block',
              textAlign: 'center',
            }}
            href="/login"
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </>
  )
}
