import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const MessageSchema = new SimpleSchema({
  userId: { type: String }, //Used as recipient userId for recommendations AND user expressing interest for applicants
  note: { type: String, optional: true },
  at: { type: Date },
})

export default MessageSchema