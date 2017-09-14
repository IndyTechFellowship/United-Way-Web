import _ from 'lodash'
import { Card } from 'material-ui/Card'
import {
  FlatButton,
} from 'material-ui'
import { grey200 } from 'material-ui/styles/colors'
import React, { Component } from 'react'

import { CloudinaryTransformToAvatar } from '/imports/helpers/images'

class CardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  toggleExpanded() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    let imgStyle = this.props.cardType === 'user' ? styles.header.logo.userImg : styles.header.logo.orgImg;
    let CardButtons = this.props.cardButtons;

    let leftColumnBody = _.map(this.props.body.leftColumn, (body, i) => {
      return (
        <div key={i} style={styles.body.contentRow}>
          <div style={{...styles.fontBase, ...styles.body.label}}>{body.label}</div>
          <div style={{...styles.fontBase, ...styles.body.content}}>{body.content}</div>
        </div>
      )
    })

    return (
      <div style={styles.container}>
        {this.state.expanded
          ? <Card style={styles.drawer}>
              <div>{this.props.drawerContent}</div>
            </Card>
          : null
        }
        <Card style={styles.card}>
          <div style={styles.header.style}>
            <div style={styles.header.logo.style}>
              <img src={CloudinaryTransformToAvatar(this.props.imageUrl)} style={imgStyle} />
            </div>
            <div style={styles.header.title.style}>
              <div style={{...styles.fontBase, ...styles.header.title.name}}>{this.props.name}</div>
              <div style={{...styles.fontBase, ...styles.header.title.title}}>{this.props.title}</div>
              <div style={{...styles.fontBase, ...styles.header.title.subtitle}}>{this.props.subtitle}</div>
            </div>
            { CardButtons 
              ? <div style={styles.header.actions.style}>
                  <CardButtons />
                </div>
              : null
            }
          </div>
          <div style={styles.body}>
            <div style={styles.body.column}>
              {leftColumnBody}
              {this.props.drawerContent
                ? <FlatButton onClick={this.toggleExpanded}>{this.state.expanded ? "SHOW LESS" : "SHOW MORE"}</FlatButton>
                : null
              }
            </div>
            <div style={styles.body.column}>
              <div style={{...styles.fontBase, ...styles.body.label}}>{this.props.body.rightColumn.label}</div>
              <div style={{...styles.fontBase, ...styles.body.content}}>{this.props.body.rightColumn.content}</div>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

const styles = {
  fontBase: {
    fontFamily: 'Roboto, sans-serif',
    color: '#000000',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minWidth: 0,
  },
  card: {
    padding: '24px',
    height: '100%',
    overflow: 'hidden'
  },
  header: {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: '80px',
      margin: '0 0 24px 0',
    },
    logo: {
      style: {
        width: '80px',
        display: 'flex',
        alignItems: 'center',
      },
      userImg: {
        maxHeight: '100%',
        maxWidth: '100%',
        borderRadius: '50%',
      },
      orgImg: {
        maxHeight: '100%',
        maxWidth: '100%',
      }
    },
    title: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: 0,
        margin: '0 16px',
      },
      name: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0 0 4px 0',
      },
      title: {
        fontSize: '16px',
        fontWeight: 'regular',
        margin: '0 0 4px 0',
      },
      subtitle: {
        fontSize: '14px',
        fontStyle: 'italic',
      },
    },
    actions: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '80px',
        width: '150px',
      },
      button: {
        backgroundColor: 'black',
        color: 'white',
      }
    }
  },
  body: {
    marginTop: '8px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    contentRow: {
      margin: '0 0 18px 0'
    },

    column: {
      maxWidth: 'calc(50% - 12px)',
      flexBasis: 'calc(50% - 12px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    },

    label: {
      height: '18px',
      fontSize: '14px',
      fontWeight: '300',
    },

    content: {
      flex: '1 0 16px',
      fontSize: '14px',
      fontWeight: '500',
      whiteSpace: 'normal',
    }
  },
  drawer: {
    margin: '-24px 8px 8px 8px',
    background: grey200,
    padding: '32px 16px 16px 16px'
  },
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
    height: '100%'
  }
}

export default CardComponent
