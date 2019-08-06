import React from 'react';

import { Link } from 'react-router-dom';
//lets us modify our component to have acces to things related to redux
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
<div className='header'>
    <Link className='logo-container' to="/">
    <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ? 
            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
    </div>
</div>
);

//the function that let us access the state, the state being our root reducer

const mapStateToProps = state => ({
currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(Header);