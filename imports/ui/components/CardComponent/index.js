import React, { Component } from 'react'
import { Card } from 'material-ui/Card'

class CardComponent extends Component {
  render() {
    let imgStyle = this.props.cardType === 'user' ? styles.header.logo.userImg : styles.header.logo.orgImg;
    let CardButtons = this.props.cardButtons;

    let leftColumnBody = this.props.body.leftColumn.map((body) => {
      return (
        <div style={styles.body.contentRow}>
          <div style={{...styles.fontBase, ...styles.body.label}}>{body.label}</div>
          <div style={{...styles.fontBase, ...styles.body.content}}>{body.content}</div>
        </div>
      )
    })

    return (
      <Card style={styles.card}>
        <div style={styles.header.style}>
          <div style={styles.header.logo.style}>
            <img src={this.props.imageUrl} style={imgStyle} />
          </div>
          <div style={styles.header.title.style}>
            <div style={{...styles.fontBase, ...styles.header.title.name}}>{this.props.name}</div>
            <div style={{...styles.fontBase, ...styles.header.title.title}}>{this.props.title}</div>
            <div style={{...styles.fontBase, ...styles.header.title.subtitle}}>{this.props.subtitle}</div>
          </div>
          <div style={styles.header.actions.style}>
            <CardButtons />
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.body.column}>
            {leftColumnBody}
          </div>
          <div style={styles.body.column}>
            <div style={{...styles.fontBase, ...styles.body.label}}>{this.props.body.rightColumn.label}</div>
            <div style={{...styles.fontBase, ...styles.body.content}}>{this.props.body.rightColumn.content}</div>
          </div>
        </div>
      </Card>
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
    margin: '8px',
    padding: '24px',
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
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '0 0 4px 0',
      },
      title: {
        fontSize: '18px',
        fontWeight: 'regular',
        margin: '0 0 4px 0',
      },
      subtitle: {
        fontSize: '16px',
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
    height: '150px',
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
      height: '20px',
      fontSize: '16px',
      fontWeight: '300',
    },

    content: {
      flex: '1 0 16px',
      fontSize: '16px',
      fontWeight: '500',
      whiteSpace: 'normal',
    }
  },
}

export default CardComponent
