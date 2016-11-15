import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const SkillsSchema = new SimpleSchema({
	name: {
		type: String,
	},
})

const Skills = new Mongo.Collection('skills')
Skills.attachSchema(SkillsSchema)

export { Skills }
