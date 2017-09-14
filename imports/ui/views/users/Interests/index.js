import _ from 'lodash'
import React, { Component } from 'react'
import MenuItem from 'material-ui/MenuItem'
import SelectField from 'material-ui/SelectField'
import { TagCloud } from 'react-tagcloud'

import EditButton from '/imports/ui/components/EditButton'
import Title from '/imports/ui/components/Title'

class Interests extends Component {
  constructor(props) {
    super(props)
    let interestsArray = _.map(new Array(10), (interest, index) => {
      const interests = this.props.user.profile.interests
      return interests.length > index ? this.props.user.profile.interests[index] : null
    })
    this.state = {
      isEditing: false,
      interests: interestsArray
    } 
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.selectInterest = this.selectInterest.bind(this)
  }

  selectInterest(index, selectedIndex) {
    const newInterest = this.props.tags[selectedIndex]
    let interests = _.cloneDeep(this.state.interests)
    interests[index] = _.cloneDeep(newInterest)
    this.setState({ interests: interests })
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    const profile = {
      interests: _.compact(this.state.interests)
    }
    let newUser = _.merge({}, this.props.user, { profile: profile })
    Meteor.call('User.update', newUser, (err, resp) => {
    })
  }
  
  render() {
    const { tags } = this.props
    const interests = _.reverse(_.compact(this.state.interests)).map((interest,index) => ({
      value: interest.name,
      count: index
    }))
    const customRenderer = (tag, size, color) => {
      return (
        <div 
          key={tag.value} 
          style={Object.assign({fontSize: size}, styles.tag)} 
        >
          {tag.value}
        </div>
      )
    }
    const interestsDropdowns = this.state.interests.map((interest, index) => (
      <SelectField
        key={index}
        hintText="Select Interest"
        value={interest ? interest.name : null}
        fullWidth={true}
        onChange={(e, selectedIndex) => this.selectInterest(index, selectedIndex)}
      >
        {tags.map(tag => (
          <MenuItem
            key={tag._id}
            insetChildren={true}
            checked={tag === interest}
            value={tag.name}
            primaryText={tag.name}
          />
        ))
        }
      </SelectField>
    ))
    const editing = (
      <div>{interestsDropdowns}</div>
    )
    const viewing = interests.length > 0 ? (
      <TagCloud 
        style={styles.cloud}
        minSize={18}
        maxSize={36}
        tags={interests}
        renderer={customRenderer}
        disableRandomColor={true} 
      />
    ) : <div style={styles.empty}>No Interests Added</div>
    return (
      <div style={styles.container}>
        <Title>Interests</Title>
        {this.props.editable ?
          <EditButton
            isEditing={this.state.isEditing}
            edit={this.edit}
            save={this.save}
          />
        : null
        }
        {this.state.isEditing ? editing : viewing}
      </div>
    )
  }
}

const styles = {
  container: {
    marginBottom: '32px',
    position: 'relative'
  },
  cloud: {
    display: 'flex',
    margin: '16px auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tag: {
    padding: '4px'
  },
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}

export default Interests
