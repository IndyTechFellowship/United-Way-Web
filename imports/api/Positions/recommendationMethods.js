import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Notifications } from '/imports/api/Notifications'
import { Positions } from './index';
import { Users } from '/imports/api/Users'

Meteor.methods({

  // Allows the current user to express interest in a given position
  'Positions.recommend'(positionId, opts) {
    check(positionId, String);
    check(opts, Match.Optional(Object));
    check(opts.userId, Match.Optional(String));
    if (!opts) opts = {};
    if (this.connection) opts.orgAdminId = this.userId;
    const callingUser = Users.findOne({ _id: opts.orgAdminId });
    if (!callingUser) throw Meteor.Error(404, 'calling user not found');
    const position = Positions.findOne({ _id: positionId });
    if (!position) throw Meteor.Error(404, 'position not found');

    // Remove their previous recommendation
    Positions.update(
        { _id: position._id },
        {
          $pull: {
            recommendations: {
              orgAdminId: opts.orgAdminId,
            }
          }
        }
    );

    // Add in a new one.
    Positions.update(
        { _id: position._id },
        {
          $push: {
            recommendations: {
              userId: opts.userId,
              orgAdminId: opts.orgAdminId,
              note: opts.note,
              at: new Date(),
            },
          },
        }
    );

    const notificationId = Notifications.insert({
      title: `${callingUser.profile.firstName} ${callingUser.profile.lastName} recommended you for the position "${position.name}"`,
      description: 'hello',
      icon: 'share',
      path: '/activity',
      viewed: false,
      at: new Date()
    })

    // Add a notification to the user
    Users.update(
      { _id: opts.userId },
      {
        $push: {
          'profile.notifications': notificationId
          }
      }
    );

  },

  // Allows the current user to remove their interest in a given position.
  'Positions.removeRecommendation'(positionId, opts) {
    check(positionId, String);
    check(opts, Match.Optional(Object));
    check(opts.userId, Match.Optional(String));
    if (!opts) opts = {};
    if (this.connection) opts.orgAdminId = this.userId;
    const callingUser = Users.findOne({ _id: opts.orgAdminId });
    if (!callingUser) throw Meteor.Error(404, 'calling user not found');
    const position = Positions.findOne({ _id: positionId });
    if (!position) throw Meteor.Error(404, 'position not found');
    Positions.update(
        { _id: position._id },
        {
          $pull: {
            recommendations: {
              orgAdminId: opts.orgAdminId,
            }
          }
        }
    );
  }

});