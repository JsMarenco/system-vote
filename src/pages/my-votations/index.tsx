import { Box, Typography, Button, Stack } from '@mui/material'
import Header from '../../components/Header'
import VotationCard from '../../components/VotationCard'
import { containedButtonStyle } from '../../styles/buttons'
import { mainContainerV2, containerV1 } from '../../styles/containers'
import myVotations from '../../data/votations.json'

export default function MyVotatiosn() {
  return (
    <>
      <Header />

      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
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
            <>
              <Typography
                variant="h5"
                color='text.primary'
              >
                My votations
              </Typography>

              {
                myVotations.map((votation, index) => (
                  <VotationCard
                    key={index}
                    id={votation.id}
                    title={votation.title}
                    description={votation.description}
                    imageUri={votation.imageUri}
                    imageAlt={votation.imageAlt}
                    startTime={votation.startTime}
                    endTime={votation.endTime}
                    user={votation.user}
                    likes={votation.likes}
                    dislikes={votation.dislikes}
                    shares={votation.shares}
                  />
                ))
              }
            </>
          )
        }
      </Stack>
    </>
  )
}
