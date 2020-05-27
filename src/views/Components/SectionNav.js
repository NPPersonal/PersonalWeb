import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(theme=>({
    
    speedDail: {
      position: 'fixed',
      right: '3%',
      bottom: '3%',
      zIndex: theme.zIndex.drawer+1,
    },
    backdrop:{
        zIndex:theme.zIndex.drawer+1,
    },
    toolTipTitle:{
        width:'100px'
    }
}));

const SectionNav = ({actions, scrollBlock='start', scrollOffset=0}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleActionClick = (index)=>{
        setOpen(false);
        const action = actions[index];
        //scroll to section
        if(action && action.sectionRef){
            console.log(action.sectionRef);
            const top = action.sectionRef.current.getBoundingClientRect().top;
            window.scroll({top:window.pageYOffset+top+scrollOffset, behavior:'smooth'})
        }
    }

    return (
        <React.Fragment>
        <Backdrop className={classes.backdrop} open={open} />
        <SpeedDial
        color='primary'
        className={classes.speedDail}
        ariaLabel="SpeedDial example"
        hidden={false}
        icon={<SpeedDialIcon icon={<MenuIcon />} openIcon={<MenuOpenIcon/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction='up'
        >
        {
            actions.map((action, index)=>{
                return (
                <SpeedDialAction
                key={index}
                icon={action.icon}
                tooltipTitle={<div className={classes.toolTipTitle}>{action.name}</div>}
                onClick={()=>handleActionClick(index)}
                tooltipOpen
                />
                )
            })
        }
        </SpeedDial>
        </React.Fragment>
    );
};

export default SectionNav;