import React from 'react';
import './InfoBar.css';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar= (props) => {
    return (
        <div className='infoBar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src={onlineIcon} alt="online Icon"/>
                <h3> { props.room} </h3>
            </div>
            <div className='rightInnerContainer'>
                    {/* for bringing back to login page if clicked to the link that is closeIcon */}
                    <a href="/"> <img src={closeIcon} alt="close Icon" /> </a>
            </div>
        </div>
    )
}

export default InfoBar;
