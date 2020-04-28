import React from 'react';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {makeStyles} from '@material-ui/core/styles';


const getContent = (value) => {
    if('string' === typeof value){
        return (<div>{value}</div>)
    }

    return value;
}

const defaultBreakPoints = {
    xs: 11,
    sm: 11,
    md: 10
}

const SectionContainer = ({
    forwardRef,
    title,
    desc,
    content,
    padding='2% 2%',
    backdropColor='#ffffff',
    breakPoints=defaultBreakPoints
}) => {
    const style = {
        backdrop:{
            backgroundColor: backdropColor,
            position:'absolute',
            top:'0',
            left:'0',
            width:'100%',
            height:'100%',
        },
        content:{
            padding: padding,
            position: 'relative',
            zIndex:'1',
        },
        desc:{
            display:'flex',
            justifyContent:'center',
            padding:'2% 0 2% 0'
        },
    }

    const classes = makeStyles(style)();

    return (
        <div ref={forwardRef}>
            <div className={classes.backdrop}></div>
            <div className={classes.content}>
                <GridContainer direction='column' justify="center" alignItems='center'>
                    {
                    !title?null:    
                    <GridItem {...breakPoints}>
                        <div>
                        {getContent(title)}
                        </div>
                    </GridItem>
                    }
                    {
                    !desc?null:
                    <GridItem {...breakPoints}>
                        <div className={classes.desc}>
                        {getContent(desc)}
                        </div>
                    </GridItem>
                    }
                    {
                    !content?null:
                    <GridItem {...breakPoints}>
                        <div>
                        {getContent(content)}
                        </div>
                    </GridItem>
                    }
                </GridContainer>
            </div>
        </div>
    );
};

export default React.forwardRef((props, ref)=><SectionContainer forwardRef={ref} {...props}/>) ;