import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const useStyles = makeStyles({
    
    speedDail: {
      position: 'fixed',
      right: '3%',
      bottom: '3%',
      zIndex: '3'
    },
});

const SectionNav = ({actions, scrollBlock='start', scrollOffset=0}) => {
    const classes = useStyles();
    const [direction, setDirection] = useState('up');
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = React.useState(false);

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
            window.scrollTo({top:window.pageYOffset+top+scrollOffset, behavior:'smooth'})
        }
    }

    return (
        <SpeedDial
        className={classes.speedDail}
        ariaLabel="SpeedDial example"
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={direction}
        >
        {
            actions.map((action, index)=>{
                return (
                <SpeedDialAction
                key={index}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={()=>handleActionClick(index)}
                />
                )
            })
        }
        </SpeedDial>
    );
};

export default SectionNav;