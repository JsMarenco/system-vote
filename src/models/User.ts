import mongoose, { Schema, models } from 'mongoose'

const UserSchema = new Schema({
  avatar: String,

  username: {
    type: String,
    unique: true,
  },
  fullName: String,

  email: String,
  password: String,

  createdAt: {
    type: Date,
    default: new Date()
  }
})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.password
  }
})

export default models.User ? models.User : mongoose.model('User', UserSchema)