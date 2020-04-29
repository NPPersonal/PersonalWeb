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
        subtitle='Everything about me' 
        />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <pre className={classes.descText}>
                {aboutMe}
                </pre>
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
        backdropColor='#e0e0e0'
        content={getContent()}
        />
    );
};

export default React.forwardRef((props, ref)=><SectionIntro forwardRef={ref} {...props} />);