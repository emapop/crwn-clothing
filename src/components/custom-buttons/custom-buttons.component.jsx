import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// ...otherProps for the type submit
const CustomButton =({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;