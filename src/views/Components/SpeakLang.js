import React from 'react';

import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';

const defaultStyle={
    wrapper:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'2%'
    },
}

const SpeakLang = ({
    title,
    titleStyle={
        fontWeight:'400',
    },
    value=3,
    maxValue=5,
    precision=1
}) => {
    const newStyle ={
        ...defaultStyle,
        title:{...titleStyle}
    }
    const useStyle = makeStyles(newStyle);
    const classes = useStyle();

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>{title}:</div>
            <Rating
            value={value} 
            defaultValue={value} 
            max={maxValue}
            precision={precision}
            readOnly
            />
        </div>
    );
};

export default SpeakLang;