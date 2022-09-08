import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { DASHBOARD_PAGE_DESCRIPTION } from '../../components/constants'
import CustomHead from '../../components/CustomHead'
import Header from '../../components/Header'
import VotationCard from '../../components/VotationCard'
import VotationProps from '../../interfaces/VotationProps'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { outlinedButtonStyle } from '../../styles/buttons'
import { getVotations } from '../../services/votations'
import { mainContainerV2 } from '../../styles/containers'
import VotationCardSkeleton from '../../components/Skeletons/VotationCardSkeleton'

export default function Dashboard() {
  const [apiMessage, setApiMessage] = useState('')

  const [votations, setVotations] = useState<VotationProps[]>([])
  const [loading, setLoading] = useState(true)
  const limit = 10
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    handleVotations()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleVotations = async () => {
    setLoading(true)
    const response = await getVotations(limit, offset)

    const message = response.data.message
    const status = response.status

    if (status === 200) {
      setVotations(response.data.votations)
    } else {
      setApiMessage(message)

      setTimeout(() => { setApiMessage('') }, 5000)
    }

    setLoading(false)
  }

  return (
    <>
      <CustomHead title='Dashboard' description={DASHBOARD_PAGE_DESCRIPTION} />

      <Header />

      {
        loading ? (
          <VotationCardSkeleton />
        ) : (
          <>
            {
              apiMessage ? (
                <MessageContainer apiMessage={apiMessage} handleVotations={handleVotations} />
              ) : (
                <>
                  <VotationsContainer
                    votations={votations}
                  />

                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                      ...outlinedButtonStyle,
                      mb: 2,
                      mx: 'auto',
                      display: 'flex',
                    }}
                    onClick={() => {
                      setOffset(offset + limit)
                      setLoading(true)
                    }}
                  >
                    Load more
                  </Button>
                </>
              )
            }
          </>
        )
      }
    </>
  )
}

interface MessageConainerProps { apiMessage: string, handleVotations: () => void }
const MessageContainer = (props: MessageConainerProps) => {
  return (
    <Box sx={mainContainerV2}>
      <Typography variant="h5" color="text.primary" mb={1}>
        {props.apiMessage}
      </Typography>

      <Button
        sx={outlinedButtonStyle}
        onClick={() => props.handleVotations()}
      >
        Try again
      </Button>
    </Box>
  )
}

interface VotationsContainerProps { votations: VotationProps[] }
const VotationsContainer = (props: VotationsContainerProps) => {
  return (
    <>
      <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ my: 2, }}>
        {
          props.votations.length === 0 ? (
            <Box sx={mainContainerV2}>
              <Typography variant="h4" color='text.primary'>
                No votations yet
              </Typography>
            </Box>
          ) : (
            <>
              <Typography variant="h5" color='text.primary'>
                Latest votations
              </Typography>

              {
                props.votations.map((votation, index) => (
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
