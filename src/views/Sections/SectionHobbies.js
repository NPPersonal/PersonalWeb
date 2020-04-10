import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import hobbiesStyle from 'assets/jss/material-kit-react/sections/hobbiesStyle';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';

import {hobbiesDescription} from 'assets/data/hobbiesData';

const useStyle = makeStyles(hobbiesStyle);

const SectionHobbies = ({
    forwardRef
}) => {
    const classes = useStyle();

    const getTitle = ()=>{
        return <Title 
        title='Hobbies' 
        subtitle='I am interested in' 
        subtitleColor='#787772' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {hobbiesDescription}
                </p>
            </div>
        );
    }

    const getContent = ()=>{
        return <div>content here</div>
    }

    return (
        <SectionContainer
        ref={forwardRef}
        title={getTitle()}
        desc={getDesc()}
        content={getContent()}
        backdropColor='#decef2'
        />
    );
};

export default React.forwardRef((props, ref)=><SectionHobbies forwardRef={ref} {...props} />) ;