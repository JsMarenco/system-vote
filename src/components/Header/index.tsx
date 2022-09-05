import { AppBar, Toolbar, ButtonGroup, Typography } from '@mui/material'
import NavbarRoutes from '../../routes/NavbarRoutes'
import { header } from '../../styles/header'

export default function Header() {
  return (
    <>
      <AppBar
        position="relative"
        sx={header}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
          >
            Votation
          </Typography>

          <ButtonGroup
            variant="text"
            aria-label="navbar-opetions"
            sx={{
              color: 'background.paper',
            }}
          >
            <NavbarRoutes />
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  )
}
