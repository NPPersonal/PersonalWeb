import React from 'react';

import Title from 'views/Components/Title';

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
                <div className={classes.sectionTitle}>
                    <Title title='About Me' subtitle='everything about me' />
                </div>
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