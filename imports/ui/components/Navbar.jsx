import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarGroup,
  FlatButton,
  FontIcon,
  AutoComplete,
} from 'material-ui'
import { browserHistory } from 'react-router'

import UserProfileMenu from '/imports/ui/components/UserProfileMenu'

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
            <FlatButton label="Positions" onClick={this.handlePositionsClicked} />
            <SearchArea />
            <FlatButton label="Agencies" onClick={this.handleAgenciesClicked} />
            <FlatButton label="People" onClick={this.handlePeopleClicked} />
            <UserProfileMenu />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  handleFeedClick() {
    browserHistory.push('/')
  }

  handlePositionsClicked() {
    browserHistory.push('/positions')
  }

  handleAgenciesClicked() {
    browserHistory.push('/organizations')
  }

  handlePeopleClicked() {
    browserHistory.push('/users')
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

const logoStyle = {
  width: '45px',
  height: '45px',
}

export default Navbar
