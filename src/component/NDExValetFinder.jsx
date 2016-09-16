import React        from 'react'
import Dialog       from 'material-ui/Dialog'
import FlatButton   from 'material-ui/FlatButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'

import CartBar from './CartBar'
import { NDExNetworkSearch } from 'ndex-search-ui'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValetFinder extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    },
    defaultQuery: "",
    theme: {},
    filters: [],
    visualizations: [],
    onLoad: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      items: {}
    }
  }

  handleAdd(itemId, item) {
    this.state.items[itemId] = item
    this.setState({ items: this.state.items })
  }

  handleRemove(itemId) {
    delete this.state.items[itemId]
    this.setState({ items: this.state.items })
  }

  handleClear = () => {
    this.setState({ items: {} })
  }

  handleLoad(singleCatagory) {
    this.props.onLoad(this.state.items, singleCatagory)
  }

  render() {
    const theme = getMuiTheme(this.props.theme)
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={this.props.style}>
          <CartBar
            onLoad={this.handleLoad.bind(this)}
            cart={this.state.items}
            addToCart={this.handleAdd.bind(this)}
            removeFromCart={this.handleRemove.bind(this)}
            clearCart={this.handleClear.bind(this)}
          />
          <NDExNetworkSearch
            style={{ height: '94%' }}
            filters={this.props.filters}
            visualizations={this.props.visualizations}
            defaultQuery={this.props.defaultQuery}
            theme={this.props.theme}
            cart={this.state.items}
            addToCart={this.handleAdd.bind(this)}
            removeFromCart={this.handleRemove.bind(this)}
            clearCart={this.handleClear.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
