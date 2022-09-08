import { NextApiRequest, NextApiResponse } from 'next'
import { getVotations } from '../../controllers'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method === 'GET') {
    return getVotations(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed' })
  }
}
