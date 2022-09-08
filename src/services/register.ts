import axios from 'axios'

interface RegisterProps {
  email: string
  password: string
  confirmPassword: string
  fullName: string
  username: string
}

export const register = async (props: RegisterProps) => {
  const { email, password, confirmPassword, fullName, username } = props

  const resgisterUrl = `${process.env.NEXT_PUBLIC_URL}/users/register`

  try {
    const { data, status } = await axios.post(resgisterUrl, {
      email,
      password,
      confirmPassword,
      fullName,
      username
    })

    return { data, status }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    return error.response
  }
}