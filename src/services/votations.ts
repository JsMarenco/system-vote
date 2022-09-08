import axios from 'axios'

export const getVotations = async (limit: number, offset: number) => {
  const votationsUrl = `${process.env.NEXT_PUBLIC_URL}/votations?limit=${limit}&offset=${offset}`

  try {
    const { data, status } = await axios.get(votationsUrl)

    return { data, status }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    return error.response
  }
}