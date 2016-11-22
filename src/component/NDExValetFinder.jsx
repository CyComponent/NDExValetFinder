import React        from 'react'

import CartBar from './CartBar'
import CommandBar from './CommandBar'

import { NDExNetworkSearch } from 'ndex-search-ui'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class NDExValetFinder extends React.Component {

  static defaultProps = {
    style: {
      width: '100%',
      height: '100%',
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

    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div style={flexContainer}>
          <CartBar
            style={{width: '100%'}}
            onLoad={this.handleLoad.bind(this)}
            cart={this.state.items}
            addToCart={this.handleAdd.bind(this)}
            removeFromCart={this.handleRemove.bind(this)}
            clearCart={this.handleClear.bind(this)}
          />
          <NDExNetworkSearch
            style={{width: '100%', height: '30em', flexGrow: 2, overflow: 'hidden' }}
            filters={this.props.filters}
            visualizations={this.props.visualizations}
            defaultQuery={this.props.defaultQuery}
            theme={this.props.theme}
            cart={this.state.items}
            addToCart={this.handleAdd.bind(this)}
            removeFromCart={this.handleRemove.bind(this)}
            clearCart={this.handleClear.bind(this)}
          />
          <CommandBar
            style={{height: '4em', width: '100%', background: '#BBBBBB'}}
            onLoad={this.handleLoad.bind(this)}
            cart={this.state.items}
            onClose={this.props.onClose}
          />
        </div>
      </MuiThemeProvider>
    )
  }

}
