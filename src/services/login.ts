import axios from 'axios'

export default async function login(email: string, password: string) {
  const loginUrl = `${process.env.NEXT_PUBLIC_URL}/users/login`

  try {
    const { data, status } = await axios.post(loginUrl, { email, password })

    return { data, status }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    return error.response
  }
}