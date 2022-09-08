import mongoose, { Schema, models } from 'mongoose'

const VotationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  
  title: String,
  description: String,

  imageUri: String,

  startDate: Date,
  endDate: Date,

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

VotationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default models.Votation ? models.Votation : mongoose.model('Votation', VotationSchema)
