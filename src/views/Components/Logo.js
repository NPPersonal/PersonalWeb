import React from 'react';
import logo from 'assets/img/ProfileLogo.png';

import makeStyles from '@material-ui/core/styles/makeStyles';

const defaultStyle = {
    image:{
        height:'40px',
    }
}

const useStyle = makeStyles(defaultStyle);

const Logo = () => {
    const classes = useStyle();
    return (
        <div>
            <img className={classes.image} src={logo} alt='logo'/>
        </div>
    );
};

export default Logo;