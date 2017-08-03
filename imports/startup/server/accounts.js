import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Accounts.onCreateUser((options, user) => {
  const { token } = options
  if (!token || token !== Meteor.settings.signupToken) {
    throw new Meteor.Error(401, 'User creation is limited to only invited people right now. Apologies!');
  }
  user.profile = options.profile
  return user
})