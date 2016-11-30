import React, { Component } from 'react'
import {
  Toolbar, 
  ToolbarGroup,
  RaisedButton,
  FlatButton,
  FontIcon,
  AutoComplete,
  Chip,
} from 'material-ui'
import blue500 from 'material-ui/styles/colors'
import Person from 'material-ui/svg-icons/action/account-circle'
import { Link } from 'react-router'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleFeedClick.bind(this)
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={toolbarGroupStyle}>
            <img src="auw.png" width="45" height="45" />
            <FlatButton label="Feed" onClick={this.handleFeedClick}  />
            <FlatButton label="About" onClick={this.handleAboutClicked} />
            <SearchArea style={{ margin: '5px' }}></SearchArea>
            <FlatButton label="Agencies" onClick={this.handleAgenciesClicked} />
            <FlatButton label="People" onClick={this.handlePeopleClicked} />
            <Person style={iconStyles} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  handleFeedClick() {
    <Link to={'/home'} />
  }

  handleAboutClicked() {
    <Link to={'/about'} />
  }

  handleAgenciesClicked() {
    <Link to={'/organizations/'} />
  }

  handlePeopleClicked() {
    <Link to={'/users'} />
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
      <div style={searchAreaStyle}>
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

const toolbarGroupStyle = {
  margin: 'auto',
  width: '90%',
}

const searchAreaStyle = {
  paddingLeft: '5px',
  paddingRight: '5px',
  backgroundColor: '#EEEEEE',
  width: '100%',
  display: 'inline-block',

}

const iconStyles = {
  width: '90px'
}

export default Navbar
