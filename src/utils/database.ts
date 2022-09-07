import mongoose from 'mongoose'

// connecto to mongodb
const DB = process.env.BD_URL || 'mongodb://localhost:27017/yourdb'

const dbIsConnected = {
  isConnected: false,
}

export const connectToDB = async () => {
  try {
    if (dbIsConnected.isConnected) return

    mongoose.connect(DB)

    mongoose.connection.on('connected', () => {
      console.log('connected to database')
    })

    mongoose.connection.on('error', (err) => {
      console.log('error connecting to database', err.message)
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    mongoose.disconnect()
    console.log('error connecting to database', error.message)
  }
}