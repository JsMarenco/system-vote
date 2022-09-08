import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDB } from '../../../utils/database'
import User from '../../../models/User'
import { validateSimpleEmail } from '../../../utils'
import bcrypt from 'bcrypt'

connectToDB()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  if (method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const {
    fullName = '',
    username = '',
    email = '',
    password = '',
    confirmPassword = ''
  } = req.body

  if (!fullName || !username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' })
  }

  if (!validateSimpleEmail(email)) {
    return res.status(400).json({ message: 'Invalid email' })
  }

  const existUser = await User.findOne({ email })
  const existUsername = await User.findOne({ username })

  if (existUser) return res.status(400).json({ message: 'This email is already registered' })
  if (existUsername) return res.status(400).json({ message: 'Username already exists' })
  if (username.length < 3) return res.status(400).json({ message: 'Username must be at least 3 characters long' })
  
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    avatar: '',
    fullName,
    username,
    email,
    password: hashedPassword
  })

  try {
    await user.save()

    return res.status(201).json({
      message: 'Account created successfully',
    })
  }
  catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}
