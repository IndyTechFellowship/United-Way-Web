import React, {Component, PropTypes } from 'react'

import PositionBasics from './PositionBasics'
import PositionDetails from './PositionDetails'
import Loading from '/imports/ui/components/Loading'

import {Card, CardHeader, CardText, CardActions, RaisedButton} from 'material-ui'

class PositionPosting extends Component {

  render() {
    if (this.props.loading) {
      return <Loading/>
    } else {
      return (
        <Card style={styles.card}>
          <CardText style={styles.header}>
            <PositionBasics position={this.props.position}/>
            <div style={styles.buttonContainer}>
              <RaisedButton label="Send Interest" primary={true} labelStyle={styles.button}/>
              <RaisedButton label="Save" secondary={true} labelStyle={styles.button}/>
            </div>
          </CardText>

          <CardText>
            <PositionDetails position={this.props.position}/>
          </CardText>
          <CardText actAsExpander={true}>
            <div style={styles.showMore}>Show More</div>
          </CardText>
          <CardText expandable={true}>
            {this.props.position.description}
          </CardText>
        </Card>
      )
    }
  }
}

PositionPosting.propTypes = {
  loading: PropTypes.bool.isRequired,
  position: PropTypes.object.isRequired,
}

const styles = {
  showMore: {
    color: 'blue',
    textDecoration: 'underline',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  card: {
    width: '400px',
  },

  button: {
    fontSize: '12px',
    alignText: 'center',
  }
}

export default PositionPosting