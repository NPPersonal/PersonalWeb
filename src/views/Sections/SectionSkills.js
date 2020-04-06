import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ListPanel from 'views/Components/ListPanel';


import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';

//skill data
import {skillList, skillDescription} from 'assets/data/skillsData';

const useStyle = makeStyles(skillStyle);

const SectionSkills = ({forwardRef})=>{

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

    const getTitle = ()=>{
        return <Title title='Skills' subtitle='I am experience in these skills' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {skillDescription}
                </p>
            </div>
        );
    }

    const getContent = ()=>{
        return <ListPanel panelList={transformSkillListToPanels(skillList)} />;
    }

    return (
        <SectionContainer
        ref={forwardRef}
        title={getTitle()}
        desc={getDesc()}
        content={getContent()}
        backdropColor='#B1A64C'
        />
    )
}

export default React.forwardRef((props, ref)=><SectionSkills forwardRef={ref} {...props}/>);