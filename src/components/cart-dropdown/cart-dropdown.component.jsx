import React from 'react';

import CustomButton from '../custom-buttons/custom-buttons.component';

import './cart-dropdown.styles.scss';

//Regular stateless component
const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;