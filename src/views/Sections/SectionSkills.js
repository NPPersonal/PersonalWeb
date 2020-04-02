import React, {useState} from 'react';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TitleGridContainer from 'views/Components/TitleGridContainer';
import ListPanel from 'views/Components/ListPanel';


import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';

//skill data
import {skillList, skillDescription} from 'assets/data/skillsData';

const useStyle = makeStyles(skillStyle);

const SectionSkills = ()=>{

    const classes = useStyle();

    const transformSkillListToPanels = (skills) => {
        return skills.map(skill=>{
            return {
                summary: (<div className={classes.panelTitle}>{skill.title}</div>),
                detail: (
                <GridContainer direction='column' justify="center" alignItems='center'>
                {
                    skill.content.map((value, index)=>{
                        return(<GridItem key={index}>
                            <div className={classes.item}>{value}</div>
                        </GridItem>);
                    })
                }
                </GridContainer>
            ),
            }
        })
    }

    return (
        <TitleGridContainer desc={skillDescription}>
            <ListPanel panelList={transformSkillListToPanels(skillList)} />
        </TitleGridContainer>
    )
}

export default SectionSkills;