import _ from 'lodash'
import React, {Component} from 'react'
import { RaisedButton } from 'material-ui'

import EditButton from '/imports/ui/components/EditButton'
import Position from '/imports/ui/views/positions/Position/Position.jsx'
import Title from '/imports/ui/components/Title'

class OrganizationPositionsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      positions: this.props.positions,
      numberOfNewPositions: 0
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.addPosition = this.addPosition.bind(this)
    this.deletePosition = this.deletePosition.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    _.each(this.state.positions, (position) => {
      if (!_.includes(position._id, 'new-')) {
        Meteor.call('Position.update', position, (err, resp) => {})
      } else {
        Meteor.call('Position.insert', position, (err, resp) => {
          let organization = _.cloneDeep(this.props.organization)
          organization.positions.push({ _id: resp })
          Meteor.call('Organization.update', organization, (err, resp => {}))
        })
      }
    })
  }

  updatePosition(id, field, value) {
    let positions = _.cloneDeep(this.state.positions)
    let position = _.find(positions, { _id: id })
    position[field] = value
    this.setState({
      positions
    })
  }

  addPosition() {
    let positions = this.state.positions
    positions.push({
      _id: `new-${this.state.numberOfNewPositions}`,
      name: '',
      skills: []
    })
    this.setState({
      positions,
      numberOfNewPositions: this.state.numberOfNewPositions+1
    })
  }

  deletePosition(id) {
    let positions = this.state.positions
    const position = _.remove(positions, { _id: id })
    this.setState({
      positions
    })
    if (!_.includes(id, 'new-')) {
      let organization = this.props.organization
      _.remove(this.props.organization.positions, id)
      Meteor.call('Position.delete', id, (err, resp) => {})
      Meteor.call('Organization.update', this.props.organization, (err, resp => {}))
    }
  }

  render() {
    const positions = this.state.positions.map((p, index) => (
                        <div key={p._id} style={styles.position}>
                          <div style={styles[index%2 ? 'right' : 'left']}>
                            <Position
                              position={p}
                              organization={this.props.organization} 
                              isEditing={this.state.isEditing}
                              updatePosition={this.updatePosition}
                              deletePosition={this.deletePosition}
                            />
                          </div>
                        </div>
                      ))

    const addPositionButton = <RaisedButton label="Add Position" fullWidth={true} onClick={this.addPosition} />

    return (
        <div style={styles.listContainer}>
          <Title>Positions</Title>
          {this.props.editable ?
            <EditButton
              isEditing={this.state.isEditing}
              edit={this.edit}
              save={this.save}
            />
          : null
          }
          <div style={styles.twoColumnLayout}>
            { this.state.isEditing ? addPositionButton : null}
            { positions.length > 0 ? 
              positions
            :
              <div style={styles.empty}>No Positions Added</div>
            }
          </div>
        </div>
    )
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    position: 'relative',
    width: '100%'
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  position: {
    flexBasis: '50%',
  },
  left: {
    marginRight: '8px'
  },
  right: {
    marginLeft: '8px'
  },
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}

export default OrganizationPositionsList
