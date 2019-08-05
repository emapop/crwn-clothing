import React from 'react';

import SigIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-out.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SigIn />
        <SignUp />
        </div>
);

export default SignInAndSignUpPage;