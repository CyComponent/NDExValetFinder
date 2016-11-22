import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'


export default class NetworkCart extends Component {

  handleLoad(singleCatagory) {
    this.props.onLoad(singleCatagory)
    this.props.clearCart()
    this.props.handleClose()
  }

  handleClear() {
    this.props.clearCart()
  }

  handleRemove(id) {
    this.props.removeFromCart(id)
  }

  buttonState = () => {
    const networkCount = Object.keys(this.props.items).length
    if(networkCount === 0) {
      return true
    } else {
      return false
    }
  }

  render() {
    const buttonStyle = {
      marginRight: '0.4em'
    }

    const actions = [
      <RaisedButton
        label="Load"
        secondary={true}
        disabled={this.buttonState()}
        onClick={this.handleLoad.bind(this, false)}
        style={buttonStyle}
      />,
      <RaisedButton
        label="Load as a collection"
        secondary={true}
        disabled={this.buttonState()}
        onClick={this.handleLoad.bind(this, true)}
        style={buttonStyle}
      />,
      <RaisedButton
        label="Clear"
        primary={true}
        disabled={this.buttonState()}
        onClick={this.handleClear.bind(this)}
        style={buttonStyle}
      />,
      <RaisedButton
        label="Close"
        onClick={this.props.handleClose}
        style={buttonStyle}
      />
    ]
    return (
      <div>
        <Dialog
          title="Network Cart"
          actions={actions}
          modal={false}
          open={this.props.isOpen}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
        >
          {(Object.keys(this.props.items).length == 0) ?
            <p>Your shopping cart is empty.</p> :

            <table style={{marginTop: '0.5em'}}>
              <tbody>
                {Object.keys(this.props.items).map((Id) => (
                 <tr>
                   <td>
                     <FlatButton
                       label={this.props.items[Id].name}
                       labelPosition="after"
                       onClick={this.handleRemove.bind(this, Id)}
                       icon={<HighlightOff/>}
                     />
                   </td>
                 </tr>)
               )}
              </tbody>
            </table>
          }
        </Dialog>
      </div>
    )
  }

}
