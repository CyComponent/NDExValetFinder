import React, {Component} from 'react'
import FlatButton   from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'

import CloseIcon from 'material-ui/svg-icons/action/done'

class CommandBar extends React.Component {

  handleLoad(singleCatagory) {
    this.props.onLoad(singleCatagory)
  }

  handleClose = () => {
    this.props.onClose();
  }


  render() {
    return(
      <div>
      <FlatButton
        label="Load Networks"
        secondary={true}
        onClick={this.handleLoad.bind(this, false)}
      />

      <FlatButton
        label="Load Networks as single collection"
        secondary={true}
        onClick={this.handleLoad.bind(this, true)}
      />

      <IconButton
        label="Close"
        onClick={this.handleClose}
      >
        <CloseIcon />

      </IconButton>
      </div>
    )
  }
}

export default CommandBar
