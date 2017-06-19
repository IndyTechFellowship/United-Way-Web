import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const InterestExpressionSchema = new SimpleSchema({
  userId: { type: String },
  note: { type: String, optional: true },
  at: { type: Date },
})

export default InterestExpressionSchema