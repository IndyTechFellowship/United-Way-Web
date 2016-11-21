import React, { Component } from 'react'

import Footer from '/imports/ui/components/Footer'
import Navbar from '/imports/ui/components/Navbar'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar title="Home"/>
        <div className="content">{ this.props.children }</div>
        <Footer />
      </div>
    )
  }

}

export default App
