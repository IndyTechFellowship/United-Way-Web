import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarGroup,
  RaisedButton,
  FlatButton,
  FontIcon,
  AutoComplete,
  Chip,
  IconButton,
  IconMenu,
  MenuItem,
  Divider
} from 'material-ui'
import Person from 'material-ui/svg-icons/action/account-circle'
import { browserHistory } from 'react-router'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleFeedClick.bind(this)
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup style={toolbarGroupStyle} firstChild={true} >
            <img src="auw.png" style={logoStyle} />
            <FlatButton label="Opportunities" onClick={this.handleFeedClick}  />
            <FlatButton label="About" onClick={this.handleAboutClicked} />
            <SearchArea />
            <FlatButton label="Agencies" onClick={this.handleAgenciesClicked} />
            <FlatButton label="People" onClick={this.handlePeopleClicked} />
            <IconMenu
                    iconButtonElement={<IconButton onClick={this.handleProfileClicked}><Person style={iconStyles} /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem >
                <div style={iconMenuViewProfileContainer}>
                  <div style={iconMenuItemContainer}>
                    <IconButton><Person style={iconStyles}/></IconButton>
                  </div>
                  <div style={iconMenuItemContainer}>
                    <div>Name</div>
                    <div>Email</div>
                    <RaisedButton>View Profile</RaisedButton>
                  </div>
                </div>
              </MenuItem>
              <Divider/>
              <MenuItem primaryText="Edit Profile" />
              <MenuItem primaryText="View Organization Profile - Admin Only?" />
              <MenuItem primaryText="Edit Organization Profile - Admin Only?" />
              <MenuItem primaryText="Account Settings" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  handleFeedClick() {
    browserHistory.push('/')
  }

  handleAboutClicked() {
    browserHistory.push('/about')
  }

  handleAgenciesClicked() {
    browserHistory.push('/organizations')
  }

  handlePeopleClicked() {
    browserHistory.push('/users')
  }

  handleProfileClicked() {
    browserHistory.push('/login')
  }

}

class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: []
    }
    this.handleUpdateInput = this.handleUpdateInput.bind(this)
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        "People: " + value,
        "Agencies: " + value,
        "All: " + value,
      ]
    })
  }

  render() {
    return (
      <div style={searchStyles}>
        <AutoComplete 
          hintText="Search"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
        />
      </div>
    )
  }
}

const searchStyles = {
  flexGrow: '1'
}

const toolbarGroupStyle = {
  margin: '0 auto',
  width: '90%',
}

const iconStyles = {
  width: '90px'
}

const logoStyle = {
  width: '45px',
  height: '45px',
}

const iconMenuViewProfileContainer = {
  display: 'flex',
  flexDirection: 'row',
}

const iconMenuItemContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

export default Navbar
