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


import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';
import skillTheme from 'assets/theme/skillsTheme.js';

const programmingLangs = {
    title: 'Programming languages',
    content: [
    'JavaScript',
    'Swift',
    'Objective-C',
    'HTML',
    'CSS',
    'C#',
    'Java',
    'C++'
    ]
};

const frameworks = {
    title: 'Frameworks',
    content: [
    'Node.js',
    'React.js',
    'Redux.js',
    'Express.js',
    'IOS MVC',
    'CodeIgniter'
    ]
};

const packageManagements = {
    title: 'Package Management',
    content: [
    'NPM',
    'CocoaPods',
    ]
};

const versionControls = {
    title: 'Version Control',
    content: [
    'Git',
    'GitHub',
    'Bitbucket'
    ]
};

const skills = [
    programmingLangs,
    frameworks,
    packageManagements,
    versionControls
]

const useStyle = makeStyles(skillStyle);

const breakPoints = {
    xs: 11,
    sm: 11,
    md: 8
}

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
        return data.map((skill, index)=>{
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

    return (
        <ThemeProvider theme={skillTheme}>
            <GridContainer direction='column' justify="center" alignItems='center'>
                <GridItem {...breakPoints}>
                    <div className={classes.title}>Skills</div>
                </GridItem>
                <GridItem {...breakPoints}>
                    <div>
                        <p className={classes.description}>
                        An artist of considerable range, Chet Faker — the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                        and records all of his own music, giving it a warm, intimate
                        feel with a solid groove structure.
                        </p>
                    </div>
                </GridItem>
                <GridItem {...breakPoints}>
                {
                    renderSkillList(skills)
                }
                </GridItem>
            </GridContainer>
        </ThemeProvider>
    )
}

export default SectionSkills;