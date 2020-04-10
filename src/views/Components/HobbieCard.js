import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

const defaultStyle = {
    cardWrapper:{
        padding:'1%',
    },
    content:{
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'5px',
        backgroundColor:'#ffffff',
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    icon:{
        textAlign:'center',
    },
    title:{
        textAlign:'center',
        fontWeight:'800',
        fontSize:'1.5em'
    }
}

const HobbieCard = ({
    icon,
    title,
    cardStyle,
    contentStyle,
    iconStyle,
    titleStyle,
}) => {
    const newStyle = defaultStyle;
    newStyle.cardWrapper = {...defaultStyle.cardWrapper,...cardStyle};
    newStyle.content = {...defaultStyle.content,...contentStyle};
    newStyle.icon = {...defaultStyle.icon,...iconStyle};
    newStyle.title = {...defaultStyle.title,...titleStyle};

    const useStyle = makeStyles(newStyle);
    const classes = useStyle();

    return (
        <div className={classes.cardWrapper}>
            <div className={classes.content}>
                <div className={classes.icon}>{icon}</div>
                <div className={classes.title}>{title}</div>
            </div>
        </div>
    );
};

export default HobbieCard;