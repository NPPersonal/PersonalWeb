import React from 'react';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

import aboutMeData from 'assets/data/aboutMeData';

import introStyle from 'assets/jss/material-kit-react/sections/introStyle';

const useStyle = makeStyles(introStyle);

const SectionIntro = () => {

    const classes = useStyle();

    return (
        <div className={classes.backdrop}>
            <div className={classes.sectionContent}>
                <div className={classes.title}>About Me</div>
                <div>
                    <p className={classes.description}>
                    {aboutMeData}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionIntro;