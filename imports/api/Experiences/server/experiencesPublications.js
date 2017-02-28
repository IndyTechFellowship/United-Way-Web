import { Meteor } from 'meteor/meteor'

import { Experiences } from '/imports/api/Experiences'

// provide a mongodb query
//      { _id: '12345' }
// the result is a list of every user profile in the app
//      [ { profile: { whatever } } ]
// we can always improve this projection later to include more
// fields, but we never want it to return the whole user object because
// meteor puts sensitive auth information on that object, including
// hashed passwords.
// This uses function() over () => {} on purpose. There are some special
// things on `this` that you sometimes need in publications and methods,
// so you always want to use function(), not arrows, in these.
Meteor.publish('Experiences.get', function(query) {
    return Experiences.find(query)
})
