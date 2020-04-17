import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useSpring, animated} from 'react-spring';

const defaultContentStyle={
    position:'absolute',
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'5px',
    backgroundColor:'#ffffff',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
const defaultStyle = {
    cardWrapper:{
        position:'relative',
        margin:'1%',
    },
    frontContent:{
        ...defaultContentStyle
    },
    backContent:{
        ...defaultContentStyle
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
    flipContent,
    cardStyle,
    frontContentStyle,
    backContentStyle,
    iconStyle,
    titleStyle,
}) => {
    const newStyle = defaultStyle;
    newStyle.cardWrapper = {...defaultStyle.cardWrapper,...cardStyle};
    newStyle.frontContent = {...defaultStyle.frontContent,...frontContentStyle};
    newStyle.backContent = {...defaultStyle.backContent,...backContentStyle};
    newStyle.icon = {...defaultStyle.icon,...iconStyle};
    newStyle.title = {...defaultStyle.title,...titleStyle};

    const useStyle = makeStyles(newStyle);
    const classes = useStyle();

    const [flipped, setFlipped] = React.useState(false);

    const {opacity, transform} = useSpring({
        opacity: flipped?0:1,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`
    });

    const handleFlip = (_e)=>{
        setFlipped(!flipped);
    }

    return (
        <div 
        className={classes.cardWrapper}
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
        >
            <animated.div 
            className={classes.frontContent}
            style={{
                opacity:opacity,
                transform: transform
            }}
            >
                <div className={classes.icon}>{icon}</div>
                <div className={classes.title}>{title}</div>
            </animated.div>
            <animated.div 
            className={classes.backContent}
            style={{
                opacity:opacity.interpolate(o=>1-o),
                transform: transform
            }}
            >
                {
                    !flipContent?null:
                    <div style={{transform:`rotateY(180deg)`}}>{flipContent}</div>
                }
            </animated.div>
        </div>
    );
};

export default HobbieCard;