import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const InterestExpressionSchema = new SimpleSchema({
  userId: { type: String },
  at: { type: Date },
  // TODO: add 'note' field, and 'positionField'?
})

export default InterestExpressionSchema