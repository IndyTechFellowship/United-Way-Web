import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import { FlatButton, RaisedButton, Popover, Snackbar } from 'material-ui'
import DropDownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down'
import Loading from '/imports/ui/components/Loading'

class ShowInterestButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      note: '',
      snackbarOpen: false
    };
  }

  handleOpenDropDown(event) {

    event.preventDefault()

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });

  }

  handleRequestClose() {
    this.setState({
      open: false,
      note: ''
    })
  }

  handleSnackbarOpen() {
    this.setState({
      snackbarOpen: true
    })
  }

  handleSnackbarClose() {
    this.setState({
      snackbarOpen: false
    })
  }

  handleNoteChange(event) {
    this.setState({note: event.target.value})
  }

  handleExpressInterest() {
    const positionId = this.props.position._id

    if (this.props.currentUser._id) {
      const opts = {userId: this.props.currentUser._id, note: this.state.note}
      Meteor.call('Positions.expressInterest', positionId, opts,
          (err, res) => {
            if (err) {
              console.log("Oh darn");
              alert(err)
            } else {
              this.handleRequestClose()
              this.handleSnackbarOpen()
            }
          })
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading/>
    } else {

    const labelText = this.props.interestExpressed ? 'INTEREST SENT' : 'SHOW INTEREST'
    const dropDownArrow = this.props.interestExpressed ? '' :  <DropDownArrow style={{...styles.label.content, ...styles.label.icon}}/>

    const label = <div style={styles.label}>
      <span style={styles.label.content}>{labelText}</span>
      {dropDownArrow}
    </div>

    return (
        <div>
          <FlatButton
              children={label}
              style={{...styles.button.style, ...((this.props.interestExpressed || !this.props.currentUser)&& styles.button.disabled)}}
              disabled={this.props.interestExpressed || !this.props.currentUser}
              backgroundColor={styles.button.backgroundColor}
              onTouchTap={this.handleOpenDropDown.bind(this)}
          />
          <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              onRequestClose={this.handleRequestClose.bind(this)}
          >
            <div style={styles.dropDown}>
              <textarea style={styles.dropDown.note} type="text" value={this.state.note}
                        placeholder="Quick note to send with your contact information..."
                        onChange={this.handleNoteChange.bind(this)}/>
              <div style={styles.dropDown.helperText}>You can choose to send a note later in
                <span style={styles.dropDown.boldHelperText}> My Activity</span>
              </div>
              <div style={styles.dropDown.buttonContainer}>
                <RaisedButton
                    label="SHOW INTEREST"
                    labelStyle={styles.dropDown.button.label}
                    style={styles.dropDown.button}
                    onTouchTap={this.handleExpressInterest.bind(this)}
                />
                <RaisedButton
                    label="CANCEL"
                    labelStyle={styles.dropDown.button.label}
                    style={styles.dropDown.button}
                    onTouchTap={this.handleRequestClose.bind(this)}
                />
              </div>
            </div>
          </Popover>
          <Snackbar
              open={this.state.snackbarOpen}
              message="Thank you for sending your interest. It is up to the organization to contact you directly in return."
              autoHideDuration={4000}
              onRequestClose={this.handleSnackbarClose.bind(this)}
          />
        </div>
    )
  }
  }
}

ShowInterestButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  position: PropTypes.object.isRequired,
}

export default ShowInterestButton

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    content: {
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '500',
    },

    icon: {
      margin: '0 0 0 8px',
      fontSize: '20px',
      height: '20px',
      width: '20px',
    }
  },

  button: {
    backgroundColor: '#0277bd',

    style: {
      width: '100%',
      height: '32px',
      lineHeight: '1.5'
    },

    disabled: {
      opacity: '0.3'
    }
  },

  dropDown: {
    width: '300px',
    height: '160px',
    backgroundColor: '#0277bd',
    padding: '16px',

    note: {
      resize: 'none',
      width: 'calc(100% - 16px)',
      height: '72px',
      padding: '8px',
      border: '0',
    },

    helperText: {
      color: '#ffffff',
      fontSize: '12px',
      margin: '0 0 16px 0',
    },

    boldHelperText: {
      fontWeight: 'bold',
    },

    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },

    button: {
      margin: '0 0 0 16px',
      height: '24px',

      label: {
        color: '#0277bd',
        lineHeight: '24px',
        fontSize: '12px',
        fontWeight: '500',
        textAlign: 'center'
      }
    }
  }
}
