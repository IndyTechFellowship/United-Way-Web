import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

ServiceConfiguration.configurations.remove({
  service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
  service: 'facebook',
  appId: Meteor.settings.facebook.id,
  secret: Meteor.settings.facebook.secret,
});

ServiceConfiguration.configurations.remove({
  service: 'google'
});

ServiceConfiguration.configurations.insert({
  service: 'google',
  clientId: Meteor.settings.google.id,
  secret: Meteor.settings.google.secret,
});

ServiceConfiguration.configurations.remove({
  service: 'linkedin',
});

ServiceConfiguration.configurations.insert({
  service: 'linkedin',
  clientId: Meteor.settings.linkedin.id,
  secret: Meteor.settings.linkedin.secret,
});