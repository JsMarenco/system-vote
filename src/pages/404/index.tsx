import { Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import { outlinedButtonStyle } from '../../styles/buttons'
import { mainContainer, containerV1 } from '../../styles/containers'

export default function PageNotFound() {
  return (
    <>
      <Box sx={mainContainer}>
        <Box sx={containerV1}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" color="text.primary">
              Page not found
            </Typography>

            <Typography variant="body1" color="text.primary">
              The page you are looking for does not exist, or has been moved. Please check the URL and try again. If you think this is a mistake, please contact us.
            </Typography>

            <Typography variant="body1" color="text.primary">
              Thank you.
            </Typography>

            <Button
              variant="outlined"
              href="/"
              sx={outlinedButtonStyle}
            >
              Home
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
