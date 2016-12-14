import React, { Component } from 'react'
import {
  Toolbar, 
  ToolbarGroup,
  RaisedButton,
  FlatButton,
  FontIcon,
  AutoComplete,
  Chip,
  IconButton
} from 'material-ui'
import blue500 from 'material-ui/styles/colors'
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
            <IconButton><Person style={iconStyles} /></IconButton>
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
    browserHistory.push('/organizations/1')
  }

  handlePeopleClicked() {
    browserHistory.push('/users/1')
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

export default Navbar
