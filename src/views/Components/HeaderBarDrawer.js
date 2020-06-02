import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton  from "@material-ui/core/IconButton";
import DrawerMenu from 'views/Components/DrawerMenu/DrawerMenu';

import Menu from "@material-ui/icons/Menu";

import makeSytles from '@material-ui/core/styles/makeStyles';



const defaultStyle = {
    appBarContainer:{
        backgroundColor:'transparent',
        boxShadow:'none',
        transition: 'all 0.5s ease-in-out'
    },
    leftContainer:{
        display:'flex',
        flexWrap:'nowrap',
        flex:'1',
    },
    rightContainer:{
        display:'flex',
        flexWrap:'nowrap',
    },
    IconColor:{
        color:'white',
        transition: 'all 0.5s ease-in-out'
    },
}

const getStyle = (scrollToTop)=>{
    if(scrollToTop) return defaultStyle;

    const newStyle = {...defaultStyle};
    newStyle.appBarContainer = {
        ...defaultStyle.appBarContainer, 
        backgroundColor:'#fff',
        boxShadow:'0 4px 20px 0px rgba(0, 0, 0, 0.14)'
    };
    newStyle.IconColor = {...defaultStyle.IconColor, color:'#000'};
    return newStyle;
}

const HeaderBarDrawer = ({
    brand,
    title,
    scrollThreshold=100,
    drawerMenuData
}) => {
    React.useEffect(()=>{
        window.addEventListener("scroll", onScroll);

        return ()=>{
            window.removeEventListener("scroll", onScroll);
        }
    });

    const onScroll = ()=>{
        const scrollYOffset =  window.pageYOffset;
        scrollYOffset>scrollThreshold?setScrollToTop(false):setScrollToTop(true);
    }

    const toggleDrawer = ()=>{
        setOpenDrawer(!openDrawer);
    }

    const [scrollToTop, setScrollToTop] = React.useState(true);
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const newStyle = getStyle(scrollToTop);
    const useStyle = makeSytles(newStyle);
    const classes = useStyle();

    return (
        <AppBar className={classes.appBarContainer}>
            <Toolbar>
                <div className={classes.leftContainer}>
                {!brand?null:brand}
                {
                    !title?
                    null
                    :
                    <div>{title}</div>
                }
                </div>
                <div className={classes.rightContainer}>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    >
                        <Menu className={classes.IconColor} style={{fontSize:40}} />
                    </IconButton>
                </div>
            </Toolbar>
            <SwipeableDrawer
            anchor='right'
            open={openDrawer}
            onClose={toggleDrawer}
            onOpen={toggleDrawer}
            >
                <DrawerMenu 
                onSelectItem={toggleDrawer}
                menuData={drawerMenuData}
                />
            </SwipeableDrawer>
        </AppBar>
    );
};

export default HeaderBarDrawer;