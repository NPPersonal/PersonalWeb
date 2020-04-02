import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import titleGridStyle from 'assets/jss/material-kit-react/components/titleGridStyle';

const useStyle = makeStyles(titleGridStyle);

const defaultBreakPoints = {
    xs: 11,
    sm: 11,
    md: 8
}

const TitleGridContainer = ({
    children, 
    title, 
    desc, 
    breakPoints=defaultBreakPoints
}) => {
    const classes = useStyle();

    return (
        <GridContainer direction='column' justify="center" alignItems='center'>
            {
            title?
            <GridItem {...breakPoints}>
                <div className={classes.title}>{title}</div>
            </GridItem>
            :
            null
            }
            {
            desc?
            <GridItem {...breakPoints}>
                <div>
                    <p className={classes.description}>
                    {desc}
                    </p>
                </div>
            </GridItem>
            :
            null
            }
            <GridItem {...breakPoints}>
            {children}
            </GridItem>
        </GridContainer>
    );
};

export default TitleGridContainer;