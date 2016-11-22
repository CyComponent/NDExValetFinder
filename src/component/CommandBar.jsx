import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'


class CommandBar extends Component {

  handleLoad(singleCatagory) {
    this.props.onLoad(singleCatagory)
  }

  handleClose = () => {
    this.props.onClose();
  }


  handleClear = () => {
    this.props.clearCart()
  }


  buttonState = () => {
    const networkCount = Object.keys(this.props.cart).length
    if(networkCount === 0) {
      return true
    } else {
      return false
    }
  }

  render() {

    const style = {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }

    return (
      <div style={this.props.style}>
        <div style={style}>
          <RaisedButton
            style={{marginRight: '0.5em', width: '15em'}}
            label="Load"
            disabled={this.buttonState()}
            secondary={true}
            onClick={this.handleLoad.bind(this, false)}
          />
          <RaisedButton
            style={{marginRight: '0.5em', width: '15em'}}
            secondary={true}
            disabled={this.buttonState()}
            label="Load as a collection"
            onClick={this.handleLoad.bind(this, true)}
          />
          <RaisedButton
            style={{marginRight: '1em'}}
            label="Close"
            onClick={this.handleClose}
          />
        </div>
      </div>
    )
  }
}

export default CommandBar
