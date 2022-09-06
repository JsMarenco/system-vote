import { Box, ButtonGroup, Typography, Button, Tooltip } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { copyToClipboard, saveLinkInTextFile } from '../../utils'
import SaveIcon from '@mui/icons-material/Save'

interface ShareWindowProps {
  linkToShare: string
}

export default function ShareWindow(props: ShareWindowProps) {
  const { linkToShare } = props

  const buttons = [
    {
      label: 'Facebook',
      tooltip: 'Share on Facebook',
      icon: <FacebookIcon />,
      fn: () => console.log('Facebook'),
    },
    {
      label: 'Twitter',
      tooltip: 'Share on Twitter',
      icon: <TwitterIcon />,
      fn: () => console.log('Twitter'),
    },
    {
      label: 'WhatsApp',
      tooltip: 'Share on WhatsApp',
      icon: <WhatsAppIcon />,
      fn: () => console.log('WhatsApp'),
    },
    {
      label: 'Instagram',
      tooltip: 'Share on Instagram',
      icon: <InstagramIcon />,
      fn: () => console.log('Instagram'),
    },
    {
      label: 'Copy link',
      tooltip: 'Copy link to clipboard',
      icon: <ContentCopyIcon />,
      fn: () => copyToClipboard(linkToShare),
    },
    {
      label: 'Save',
      tooltip: 'Save link to file',
      icon: <SaveIcon />,
      fn: () => saveLinkInTextFile(linkToShare),
    }
  ]

  return (
    <>
      <Box>
        <Typography
          variant="h6"
          color="text.primary"
          align="center"
        >
          Share
        </Typography>

        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="Share window"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            buttons.map((button, index) => (
              <Tooltip
                title={button.tooltip}
                key={index}
                arrow
              >
                <Button
                  variant="text"
                  color="primary"
                  aria-label={button.label}
                  onClick={button.fn}
                >
                  {button.icon}
                </Button>
              </Tooltip>
            ))
          }
        </ButtonGroup>
      </Box>
    </>
  )
}
