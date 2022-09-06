import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import VotationProps from '../../interfaces/VotationProps'
import { convertDate, convertDateFuture } from '../../utils'
import { containerV1 } from '../../styles/containers'
import {
  Avatar, Box, Card, CardActions, CardContent,
  CardHeader, CardMedia, Typography, ButtonGroup, Button,
} from '@mui/material'
import ShareWindow from '../ShareWindow'
import FlagIcon from '@mui/icons-material/Flag'

// TODO - connect to /votations/likes/:id
// TODO - connect to /votations/shares/:id
// TODO - connect to /votations/flags/:id
// TODO - connect to /votations/views/:id

export default function VotationCard(props: VotationProps) {
  const {
    title,
    description,
    imageUri,
    imageAlt,
    startTime,
    endTime,
    likes,
    shares,
  } = props

  const {
    name,
    lastName,
    avatarUri,
  } = props.user

  const [shareWindow, setShareWindow] = useState(false)

  return (
    <>
      <Card
        sx={{
          ...containerV1,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={avatarUri}
              alt={`${name} ${lastName}`}
            >
              {
                // fisrt letter of name
                name[0]
              }
            </Avatar>
          }

          title={`${name} ${lastName}`}
          subheader={`${convertDate(startTime)} - ${convertDateFuture(endTime)}`}
        />

        <CardMedia
          component="img"
          image={imageUri}
          alt={imageAlt}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            width: '95%',
            mx: 'auto',
          }}
        />

        <CardContent>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 1.5 }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ButtonGroup
            variant="text"
            aria-label="Votation actions"
            sx={{
              color: 'text.primary',
            }}
          >
            <Button
              variant="text"
              color="primary"
              startIcon={<FavoriteIcon />}
              aria-label="Like"
            >
              {likes}
            </Button>

            <Button
              variant="text"
              color="primary"
              startIcon={<ShareIcon />}
              aria-label="Share"
              onClick={() => setShareWindow(!shareWindow)}
            >
              {shares}
            </Button>
          </ButtonGroup>

          <Button
            variant="text"
            color="primary"
            startIcon={<FlagIcon />}
            aria-label="Report"
          >
            Report
          </Button>
        </CardActions>
      </Card>

      {
        shareWindow && (
          <Box sx={{
            ...containerV1,
            maxWidth: '300px',
            mx: 'none',
            boxShadow: '5px 5px 15px 5px rgba( 0, 0, 0, .1)',
            height: 'auto',
          }}>
            <ShareWindow
              linkToShare="https://www.google.com"
            />
          </Box>
        )
      }
    </>
  )
}
