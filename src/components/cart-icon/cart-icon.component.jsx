import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    //fire the function
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapMapStateToProps = (state) =>({ 
    itemCount: selectCartItemsCount(state)
});

//passing null as the default
export default connect(
    mapMapStateToProps,
    mapDispatchToProps
     )(CartIcon);

