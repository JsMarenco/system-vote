import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import { mainContainer } from '../styles/containers'

const Home: NextPage = () => {
  return (
    <>
      <Box
        sx={mainContainer}
        role="main"
      >
        <Button
          variant="outlined"
          color="primary"
          href="/login/"
        >
          Login
        </Button>
      </Box>
    </>
  )
}

export default Home
