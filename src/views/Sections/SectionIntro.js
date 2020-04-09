import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import SpeakLangsPage from 'views/SpeakLangsPage/SpeakLangsPage';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

import {aboutMe} from 'assets/data/aboutMeData';

import introStyle from 'assets/jss/material-kit-react/sections/introStyle';

const useStyle = makeStyles(introStyle);

const SectionIntro = ({forwardRef}) => {

    const classes = useStyle();

    const getTitle = ()=>{
        return <Title 
        title='About Me' 
        subtitle='everything about me' 
        subtitleColor='#787772' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {aboutMe}
                </p>
            </div>
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
        backdropColor='#decef2'
        content={getContent()}
        />
    );
};

export default React.forwardRef((props, ref)=><SectionIntro forwardRef={ref} {...props} />);