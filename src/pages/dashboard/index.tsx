import { Box, Stack, Typography } from '@mui/material'
import Header from '../../components/Header'

export default function Dashboard() {
  const votations = []

  return (
    <>
      <Header />

      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          mt: 2,
          mb: 2,
        }}
      >
        {
          // votations.length is less than 1
          // then show a message
          votations.length === 0 ? (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Typography
                variant="h4"
                color='common.black'
              >
                No votations yet
              </Typography>
            </Box>
          ) : (
            <>
              <Typography
                variant="h5"
                color='common.black'
              >
                Latest votations
              </Typography>
            </>
          )
        }
      </Stack>
    </>
  )
}
