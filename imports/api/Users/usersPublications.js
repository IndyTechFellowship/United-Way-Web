import { Meteor } from 'meteor/meteor'

import { Users } from '/imports/api/Users'

Meteor.publish({
    
    // provide a mongodb query 
    //      { _id: '12345' }
    // the result is a list of every user profile in the app 
    //      [ { profile: { whatever } } ]
    // we can always improve this projection later to include more 
    // fields, but we never want it to return the whole user object because 
    // meteor puts sensitive auth information on that object, including 
    // hashed passwords. 
    'Users.get'(query) {
        return Users.find(query, { 'profile': 1 })
    }

})