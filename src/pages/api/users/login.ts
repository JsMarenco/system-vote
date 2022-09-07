import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from '../../../utils/database'
import User from '../../../models/User'
import { validateSimpleEmail } from '../../../utils'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectToDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { email = '', password = '' } = req.body

  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })

  if (!validateSimpleEmail(email)) return res.status(400).json({ message: 'Invalid email' })

  const existUser = await User.findOne({ email })

  if (!existUser) return res.status(404).json({ message: 'Invalid credentials' })

  const isPasswordCorrect = await bcrypt.compare(password, existUser.password)

  if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

  // Create and assign a token with a expiration date of 7 day

  const fieldsToEncode = {
    email: existUser.email,
  }

  const secret = process.env.JWT_SECRET || 'secret'

  const token = jwt.sign(fieldsToEncode, secret, {
    expiresIn: '7d',
  })

  return res.status(200).json({
    message: 'Login successful',
    token,
  })
}
