import { Box, Typography, Button } from '@mui/material'
import Header from '../../components/Header'
import { containedButtonStyle } from '../../styles/buttons'
import { mainContainerV2, containerV1 } from '../../styles/containers'

export default function MyVotatiosn() {
  const myVotations = []

  return (
    <>
      <Header />

      {
        myVotations.length === 0 ? (
          <Box
            sx={{
              ...mainContainerV2,
              width: '100%',
            }}
          >
            <Box sx={containerV1}>
              <Typography
                variant="h5"
                align="center"
              >
                {'You don\'t have any votations yet.'}
              </Typography>

              <Button
                variant="text"
                href="/create-votation"
                sx={{
                  ...containedButtonStyle,
                  display: 'block',
                  mx: 'auto',
                  alignItems: 'center',
                  textAlign: 'center',
                  mt: 1,
                }}
              >
                Create one now
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
          </Box>
        )
      }
    </>
  )
}
