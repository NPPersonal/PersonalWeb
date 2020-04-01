import React, {useState} from 'react';

//import from material-ui core
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TitleGridContainer from 'views/Components/TitleGridContainer';


import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';
import panelTheme from 'assets/theme/expansionPanelTheme.js';

//skill data
import {skillList, skillDescription} from 'assets/data/skillsData';

const useStyle = makeStyles(skillStyle);

const SectionSkills = ()=>{

    const classes = useStyle();
    const [expand, setExpand] = useState('');

    const handlePanelExpand = panelName=>{
        if(expand === panelName){
            setExpand('');
        }
        else{
            setExpand(panelName);
        }
        
    }

    const renderSkillList = (data)=>{
        return (
            <ThemeProvider theme={panelTheme}>
                <div>
                {
                    data.map((skill, index)=>{
                        return (
                            <ExpansionPanel
                            key={index}
                            expanded={expand === `panel${index+1}`} 
                            onChange={()=>handlePanelExpand(`panel${index+1}`)}>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                >
                                    <div className={classes.panelTitle}>{skill.title}</div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                >
                                    <GridContainer direction='column' justify="center" alignItems='center'>
                                    {
                                        skill.content.map((value, index)=>{
                                            return(<GridItem key={index}>
                                                <div className={classes.item}>{value}</div>
                                            </GridItem>);
                                        })
                                    }
                                </GridContainer>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            
                        ); 
                    })
                }
                </div>
            </ThemeProvider>
        );
    }

    return (
        <TitleGridContainer title='Skills' desc={skillDescription}>
        {
            renderSkillList(skillList)
        }
        </TitleGridContainer>
    )
}

export default SectionSkills;