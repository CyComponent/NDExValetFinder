import React, {Component} from 'react'
import FlatButton   from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import RaisedButton from 'material-ui/RaisedButton'

import CloseIcon from 'material-ui/svg-icons/action/done'


class CommandBar extends Component {

  handleLoad(singleCatagory) {
    this.props.onLoad(singleCatagory)
  }

  handleClose = () => {
    this.props.onClose();
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
            secondary={true}
            onClick={this.handleLoad.bind(this, false)}
          />
          <RaisedButton
            style={{marginRight: '0.5em', width: '15em'}}
            secondary={true}
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
