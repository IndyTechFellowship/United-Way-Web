import React, { Component } from 'react'
import { Button, Intent } from '@blueprintjs/core'
import { connect } from 'react-redux'

import {
  changePassword,
} from '/imports/new-ui/state'

class SettingsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      confirm: null,
      current: '',
      error: null,
      loading: false,
      new1: '',
      new2: ''
    }
    this.changePassword = this.changePassword.bind(this)
  }

  changePassword() {
    const { changePassword } = this.props
    const { current, new1, new2 } = this.state
    if (new1 !== new2) {
      return this.setState({ error: 'Your passwords must match' })
    }
    this.setState({ confirm: null, error: null, loading: true })
    changePassword(current, new1, (err) => {
      this.setState({ loading: false })
      if (err) {
        this.setState({ confirm: null, error: err.reason })
      } else {
        this.setState({ 
          confirm: 'Your password has been reset!', 
          current: '',
          error: null,
          new1: '',
          new2: '',
        })
      }
    })
  }

  render() {
    return (
      <div style={styles.content}>
        <div style={styles.settingsContainer}>
          <h2>Change Password</h2><br />
          <div className="pt-input-group" style={styles.inputs}>
            { this.state.error ? <div style={styles.error} className="pt-callout pt-intent-danger">{this.state.error}</div>
                : null
            }
            <label className="pt-label">
              Current Password
              <input 
                className="pt-input"
                type="password"
                placeholder="Current Password"
                dir="auto"
                onKeyPress={(e) => { if (e.key === 'Enter') this.changePassword() }}
                onChange={(e) => this.setState({ current: e.target.value })}
                value={this.state.current}
              />
            </label>
            <label className="pt-label">
              New Password
              <input 
                className="pt-input"
                type="password"
                placeholder="New Password"
                dir="auto"
                onKeyPress={(e) => { if (e.key === 'Enter') this.changePassword() }}
                onChange={(e) => this.setState({ new1: e.target.value })}
                value={this.state.new1}
              />
            </label>
            <label className="pt-label">
              Confirm New Password
              <input 
                className="pt-input"
                type="password"
                placeholder="Confirm New Password"
                dir="auto"
                onKeyPress={(e) => { if (e.key === 'Enter') this.changePassword() }}
                onChange={(e) => this.setState({ new2: e.target.value })}
                value={this.state.new2}
              />
            </label>
          </div>
          <Button
            text="Change Password"
            onClick={this.changePassword}
            intent={Intent.PRIMARY}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto'
  },
  settingsContainer: {
    padding: '40px',
    background: 'white'
  },
  inputs: {
    width: '300px'
  },
  error: {
    marginBottom: '10px'
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldp, newp, done) => dispatch(changePassword(oldp, newp, done)),
})

export default connect(null, mapDispatchToProps)(SettingsPage)