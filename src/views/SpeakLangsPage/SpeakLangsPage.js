import React from 'react';

import Title from 'views/Components/Title';
import SpeakLang from 'views/Components/SpeakLang';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {makeStyles} from '@material-ui/core/styles';
import langsPageStyle from 'assets/jss/material-kit-react/langsPage/langsPageStyle';

import {languages} from 'assets/data/aboutMeData';

const breakPoints={
    xs:12,
    sm:6,
    md:5
}

const useStyle = makeStyles(langsPageStyle);

const SpeakLangsPage = () => {
    const classes = useStyle();

    const getSpeakLangs = (languages)=>{
        return languages.map((lang, index)=>{
            return (
            <SpeakLang 
            key={index}
            title={lang.langTitle}
            value={lang.rating}
            maxValue={lang.maxRating}
            precision={lang.precision}  
            />
            )
        })
    }

    return (
        <div className={classes.pageWrapper}>
            <GridContainer direction='column' justify='center' alignItems='center'>
                <GridItem {...breakPoints}>
                    <Title title='Languages' subtitle='Languages I can speak'/>
                </GridItem>
                <GridItem {...breakPoints}>
                    <div className={classes.langWrapper}>
                    {getSpeakLangs(languages)}
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default SpeakLangsPage;