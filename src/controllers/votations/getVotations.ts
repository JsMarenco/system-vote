import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from '../../utils/database'
import Votation from '../../models/Votation'

connectToDB()

export default async function getVotations(req: NextApiRequest, res: NextApiResponse) {
  // offset and limit 
  const { offset, limit } = req.query

  if (!offset || !limit) return res.status(400).json({ message: 'Offset and limit are required' })

  // get votations
  const votations = await Votation.find()
    .skip(Number(offset))
    .limit(Number(limit))
    .sort({ createdAt: -1 })
    .populate('user', 'name')
    .exec()

  // return votations and total
  return res.status(200).json({ votations })
}
