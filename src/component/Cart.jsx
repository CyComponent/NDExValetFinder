import React        from 'react'
import Dialog       from 'material-ui/Dialog'
import FlatButton   from 'material-ui/FlatButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'

export default class Cart extends React.Component {

  handleClose = () => {
    this.props.handleClose()
  }

  handleLoad(singleCatagory) {
    this.props.onLoad(this.props.items, singleCatagory)
    this.props.handleClear()
    this.handleClose()
  }

  render() {
    const actions = [
      <FlatButton
        label="Clear Networks"
        primary={true}
        onClick={this.handleClear}
      />,
      <FlatButton
        label="Load Networks"
        secondary={true}
        onClick={this.handleLoad.bind(this, false)}
      />,
      <FlatButton
        label="Load Networks as single collection"
        secondary={true}
        onClick={this.handleLoad.bind(this, true)}
      />,
      <FlatButton
        label="Close Cart"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.handleClose}
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
            <table>
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
