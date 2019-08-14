import React from 'react';
//lets us modify our component to have acces to things related to redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { 
        HeaderContainer,
        LogoContainer,
        OptionsContainer,
        OptionLink
    } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';

//import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
<HeaderContainer>
    <LogoContainer to="/">
    <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
             <OptionLink as='div' onClick={() => auth.signOut()}>
                SIGN OUT
                </OptionLink>
            ) : (
            <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
        )}
        <CartIcon />
    </OptionsContainer>
    {hidden ? null: <CartDropdown />}
</HeaderContainer>
);

//the function that let us access the state, the state being our root reducer
// destructure nested values
const mapStateToProps = createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);