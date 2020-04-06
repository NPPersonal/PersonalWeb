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
    md: 8
}

const SectionContainer = ({
    forwardRef,
    title,
    desc,
    content,
    padding='4% 4%',
    backdropColor='#ffffff',
    breakPoints=defaultBreakPoints
}) => {
    const style = {
        backdrop:{
            backgroundColor: backdropColor
        },
        contentPadding:{
            padding: padding
        },
        descPadding:{
            padding:'2% 0 2% 0'
        }
    }

    const classes = makeStyles(style)();

    return (
        <div ref={forwardRef} className={classes.backdrop}>
            <div className={classes.contentPadding}>
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
                        <div className={classes.descPadding}>
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