import React       from 'react'
import AppBar      from 'material-ui/AppBar'
import FlatButton  from 'material-ui/FlatButton'
import IconButton  from 'material-ui/IconButton';
import CartIcon    from 'material-ui/svg-icons/action/shopping-cart';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import LogoutIcon  from 'material-ui/svg-icons/action/exit-to-app';
import PopOver     from 'material-ui/Popover'
import Dialog      from 'material-ui/Dialog'
import Badge       from 'material-ui/Badge';
import Cart        from './Cart'

export default class TopBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cartOpen: false }
  }


  toggleCart() {
    this.setState({ cartOpen: !this.state.cartOpen })
  }

  render() {
    return (
      <AppBar
        title={Object.keys(this.props.cart).length}
        iconElementLeft={
          <IconButton onClick={this.toggleCart.bind(this)}>
            <CartIcon/>
          </IconButton>
        }
      >
        <Cart
          items={this.props.cart}
          isOpen={this.state.cartOpen}
          handleClose={this.toggleCart.bind(this)}
          addToCart={this.handleAdd}
          removeFromCart={this.handleRemove}
          clearCart={this.handleClear}
          handleLoad={this.handleLoad}
        />
      </AppBar>
    )
  }

}
