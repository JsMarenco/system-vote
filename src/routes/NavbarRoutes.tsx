import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import { Button } from '@mui/material'
import { outlinedButtonStyle } from '../styles/buttons'
import { useRouter } from 'next/router'

export default function NavbarRoutes() {
  const router = useRouter()

  const routes = [
    {
      name: 'Create votation',
      path: '/create-votation',
      icon: <AddCircleOutlineRoundedIcon />
    },
    {
      name: 'My votations',
      path: '/my-votations',
      icon: <RemoveRedEyeRoundedIcon />
    },
    {
      name: 'Log out',
      path: '/login',
      icon: <LoginRoundedIcon />
    }
  ]

  return (
    <>
      {routes.map((route, index) => (
        <Button
          key={index}
          href={route.path}
          sx={{
            ...outlinedButtonStyle,
            width: '150px',
            border: 'none',
          }}
          startIcon={route.icon}
          disabled={router.pathname === route.path}
        >
          {route.name}
        </Button>
      ))}
    </>
  )
}
