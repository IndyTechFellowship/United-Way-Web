import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { FlatButton } from 'material-ui'

class CardComponent extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <div style={styles.header.style}>
          <div style={styles.header.logo.style}>
            <img src={this.props.imageUrl} style={styles.header.logo.img} />
          </div>
          <div style={styles.header.title.style}>
            <div style={styles.header.title.supertitle}>{this.props.supertitle}</div>
            <div style={styles.header.title.title}>{this.props.title}</div>
            <div style={styles.header.title.subtitle}>{this.props.subtitle}</div>
          </div>
          <div style={styles.header.actions.style}>
            <FlatButton label={this.props.buttonLabel} fullWidth={true} style={styles.header.actions.button}/>
          </div>
        </div>
        <div style={styles.body}>
          {this.props.body}
        </div>
      </Card>
    )
  }
}

const styles = {
  card: {
    margin: '8px',
    padding: '8px',
  },
  header: {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: '100px',
    },
    logo: {
      style: {
        width: '100px',
        display: 'flex',
        alignItems: 'center',
      },
      img: {
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
        padding: '8px',
      },
      supertitle: {
        fontSize: '20px',
        textDecoration: 'underline',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
      },
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
      },
      subtitle: {
        fontSize: '16px',
        fontStyle: 'italic',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        minWidth: 0,
      }
    },
    actions: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100px',
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
  },
}

export default CardComponent
