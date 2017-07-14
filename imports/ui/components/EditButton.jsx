import React, { Component, PropTypes } from 'react'
import { FlatButton } from 'material-ui'
import { lightBlue400, lightBlue800 } from 'material-ui/styles/colors'

class EditButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  onMouseEnter() {
    this.setState({ hover: true })
  }

  onMouseLeave() {
    this.setState({ hover: false })
  }

  toggleEdit() {
    if (this.props.isEditing) {
      this.props.save()
    } else {
      this.props.edit()
    }
  }

  render() {
    return (
      <div 
        style={styles.edit(this.state.hover)}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.toggleEdit}
      >
        {this.props.isEditing ? "SAVE" : "EDIT" }
      </div>
    )
  }

}

const styles = {
  edit: hover => ({
    position: 'absolute',
    top: 4,
    right: 0,
    fontSize: '14px',
    fontWeight: 'bold',
    color: hover ? lightBlue400 : lightBlue800,
    cursor: 'pointer',
  })
}

EditButton.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  edit: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
}

export default EditButton
