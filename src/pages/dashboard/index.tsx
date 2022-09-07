import { Box, Stack, Typography } from '@mui/material'
import { DASHBOARD_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import VotationCard from '../../components/VotationCard'
import votations from '../../data/votations.json'

export default function Dashboard() {
  return (
    <>
      <CustomHead title='Dashboard' description={DASHBOARD_PAGE_DESCRIPTION} />

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

              {
                votations.map((votation, index) => (
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
