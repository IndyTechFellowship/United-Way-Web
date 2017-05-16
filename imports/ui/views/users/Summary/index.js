import React, { Component } from 'react'

import Title from '/imports/ui/components/Title'

class Summary extends Component {
  render() {
    return (
      <div>
        <Title>Summary</Title>
        <div style={styles.summary}>
          About me blurb blah hello what’s up? I am probably a hipster but maybe not. I like blue ducks and magenta roses and wild turkey. I play baseball and crochet and I am chalk full of random facts at all times. Get to know me! This is clearly copy and super silly and random af. The end. About me blurb blah hello what’s up? I am probably a hipster but maybe not. I like blue ducks and magenta roses and wild turkey. I play baseball and crochet and I am chalk full of random facts at all times. Get to know me! This is clearly copy and super silly and random af. The end. About me blurb blah hello what’s up? I am probably a hipster but maybe not. I like blue ducks and magenta roses and wild turkey.
        </div>
      </div>
    )
  }
}

const styles = {
  summary: {
    fontSize: '16px',
    fontWeight: 300,
  }
}

export default Summary
