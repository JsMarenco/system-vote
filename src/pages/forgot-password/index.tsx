import { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { containedButtonStyle } from '../../styles/buttons'
import { containerV1, mainContainer } from '../../styles/containers'
import { FORGOT_PASSWORD_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'

export default function ForgotPassword() {
  const [apiMessage, setApiMessage] = useState('This is a message from the API')

  return (
    <>
      <CustomHead title="Forgot Password" description={FORGOT_PASSWORD_PAGE_DESCRIPTION} />

      <Box sx={mainContainer}>
        <Box sx={containerV1} component="form" id="forgot-password-form">
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ fontWeight: 700 }}
            align="center"
          >
            Enter your email
          </Typography>

          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{
              my: 2,
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

          <Typography
            variant="body1"
            color="text.primary"
            align="center"
          >
            We will send you a link to reset your password
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            align="center"
          >
            {'If you don\'t receive an email, please check your spam folder'}
          </Typography>

          <Button
            variant="text"
            color="primary"
            sx={{
              ...containedButtonStyle,
              mt: 2,
              mx: 'auto',
              display: 'block',
              textAlign: 'center',
            }}
            href="/reset-password"
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  )
}
