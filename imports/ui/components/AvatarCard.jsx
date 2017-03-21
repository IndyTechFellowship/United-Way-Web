import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { grey200 } from 'material-ui/styles/colors'

class AvatarCard extends Component {

  render() {
    return (
      <Card>
        <CardMedia style={styles.cardMedia}>
          <img src={this.props.avatarUrl} />
        </CardMedia>
        <CardTitle title={this.props.name} subtitle={this.props.name}/>
      </Card>
    )
  }

}

const styles = {
  cardMedia: {
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    margin: '4px',
  },
}

export default AvatarCard
