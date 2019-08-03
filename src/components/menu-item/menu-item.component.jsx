import React from 'react';

//this is a higher order component, takes a component as an argument and returns you a modified component
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
     onClick ={() => history.push(`${match.url}${linkUrl}`)} 
     >
        <div
         className='background-image'
          style={{  
         backgroundImage:`url(${imageUrl})`
    }} 
    />        
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

//returns a puper powered menu component with acces now to those locations
// match and history props that we need access to 
export default withRouter(MenuItem);