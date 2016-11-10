import React, { Component } from 'react'

import Navbar from '/imports/ui/components/Navbar'
import Footer from '/imports/ui/components/Footer'


class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="content">{ this.props.children }</div>
        <Footer />
      </div>
    )
  }

}

export default App
