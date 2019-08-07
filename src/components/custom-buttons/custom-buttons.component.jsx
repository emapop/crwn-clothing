import React from 'react';

import './custom-button.styles.scss';

// ...otherProps for the type submit
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;