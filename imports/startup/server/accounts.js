import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base'

Accounts.onCreateUser((options, user) => {
  user.profile = options.profile
  return user
})