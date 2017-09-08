import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Users } from '/imports/api/Users'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Loading from '/imports/ui/components/Loading'

const styles = {
  headerStyle: {
    padding: 15,
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  avatarStyle: {

  },
  infoStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  subInfoStyle: {

  }
}

class InterestedPositionItem extends Component {
  render() {
    let { note, user } = this.props
    let { headerStyle, nameStyle, avatarStyle, infoStyle, subInfoStyle } = styles
    if ( !user || !user.profile ) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        <div>
          <Card>
            <CardText style={headerStyle}>
              <div style={avatarStyle}>
                {this.getPlaceholder()}
              </div>
              <div style={infoStyle}>
                <div style={nameStyle} >{user.profile.firstName} {user.profile.lastName}</div>
                <div>{user.profile.tagline}</div>
              </div>
              <div style={subInfoStyle}>
                {user.emails[0].address}
              </div>
            </CardText>
            <NoteSection note={note} />
          </Card>
        </div>
      </div>
    )
  }

  getPlaceholder() {
    let userAvatar = 'https://placehold.it/350x150'; //replace this with an actual user avatar url once all that is setup
    if (userAvatar == undefined) {
      return getUserInitials();
    }
    return <img style={{height: '48px', width: '48px', borderRadius: '50%'}} src={userAvatar} />;
  }
}

const NoteSection = (props) => {
  let { note } = props
  if (note) {
    return (
      <CardText>
        Note From Volunteer:<br />
        {note}
      </CardText>
    )
  } else {
    return (
      <div></div>
    )
  }
}

const InterestedPositionItemContainer = createContainer((props) => {
  const query = {_id: props.userId}
  const usersHandle = Meteor.subscribe('Users.get', query)
  if (!usersHandle.ready()) return { user: {} }
  let user = Users.findOne(query)
  return { user: user }
}, InterestedPositionItem)

export default InterestedPositionItemContainer