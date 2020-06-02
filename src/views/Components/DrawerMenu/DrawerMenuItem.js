import React from 'react';

import Button from '@material-ui/core/Button';

const DrawerMenuItem = ({
    icon,
    title,
    ...rest
}) => {
    return (
       <Button
        variant="text"
        startIcon={icon}
        {...rest}
       >
       {title}
       </Button>
    );
};

export default DrawerMenuItem;