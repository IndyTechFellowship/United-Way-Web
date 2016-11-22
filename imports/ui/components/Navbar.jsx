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

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true} style={toolbarGroupStyle}>
            <img src="auw.png" width="45px" height="45px" />
            <FlatButton label="Feed" />
            <FlatButton label="About" />
            <SearchArea style={{ margin: '5px' }}></SearchArea>
            <FlatButton label="Agencies" />
            <FlatButton label="People" />
            <Person style={iconStyles} />
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

  handleFeedClick() {

  }

  handleAboutClicked() {

  }

  handleAgenciesClicked() {

  }

  handlePeopleClicked() {

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
  width: '90%'
}

const searchAreaStyle = {
  paddingLeft: '5px',
  paddingRight: '5px',
  backgroundColor: '#EEEEEE',
  width: '100%',
  display: 'inline-block'

}

const iconStyles = {
  width: '90px'
};

export default Navbar
