import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import SpeakLangsPage from 'views/SpeakLangsPage/SpeakLangsPage';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

import {aboutMe} from 'assets/data/aboutMeData';

import introStyle from 'assets/jss/material-kit-react/sections/introStyle';

const useStyle = makeStyles(introStyle);

const SectionIntro = ({forwardRef}) => {

    const classes = useStyle();

    const getTitle = ()=>{
        return <Title 
        title='About Me'
        />;
    }

    const getDesc = ()=>{
        return (
            <pre className={classes.preText}>
                <Typography variant='h5' color='secondary' paragraph>
                {aboutMe}
                </Typography>
            </pre>
        );
    }

    const getContent = ()=>{
        return <SpeakLangsPage />
    }

    return (
        <SectionContainer
        ref={forwardRef}
        title={getTitle()}
        desc={getDesc()}
        content={getContent()}
        />
    );
};

export default React.forwardRef((props, ref)=><SectionIntro forwardRef={ref} {...props} />);