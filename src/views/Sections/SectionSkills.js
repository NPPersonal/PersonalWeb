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

const programmingLangs = [
    'JavaScript',
    'Swift',
    'Objective-C',
    'HTML',
    'CSS',
    'C#',
    'Java',
    'C++'
];

const frameworks = [
    'Node.js',
    'React.js',
    'Redux.js',
    'Express.js',
    'IOS MVC',
    'CodeIgniter'
];

const packageManagements = [
    'NPM',
    'CocoaPods',
];

const versionControls = [
    'Git',
    'GitHub',
    'Bitbucket'
];

const createList = (data)=>{
    return (
        <GridContainer direction='column' justify="center" alignItems='center'>
        {
            data.map((value, index)=>{
                return(<GridItem key={index}>
                    <div>{value}</div>
                </GridItem>);
            })
        }
       </GridContainer>
    );
}

const breakPoints = {
    xs: 12,
    sm: 12,
    md: 8
}

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

    return (
        <ThemeProvider theme={skillTheme}>
        <GridContainer direction='column' justify="center" alignItems='center'>
            <GridItem {...breakPoints}>
                <div className={classes.title}>Skills</div>
            </GridItem>
            <GridItem {...breakPoints}>
                <div className={classes.description}>
                    <p>
                    An artist of considerable range, Chet Faker — the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                    and records all of his own music, giving it a warm, intimate
                    feel with a solid groove structure.
                    </p>
                </div>
            </GridItem>
            <GridItem {...breakPoints}>
                <ExpansionPanel
                expanded={expand === 'panel1'} 
                onChange={()=>handlePanelExpand('panel1')}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                        <div className={classes.panelTitle}>Programming languages</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                    >
                        {createList(programmingLangs)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </GridItem>
            <GridItem {...breakPoints}>
                <ExpansionPanel
                expanded={expand === 'panel2'} 
                onChange={()=>handlePanelExpand('panel2')}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                        <div className={classes.panelTitle}>Frameworks</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                    >
                        {createList(frameworks)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </GridItem>
            <GridItem {...breakPoints}>
                <ExpansionPanel
                expanded={expand === 'panel3'} 
                onChange={()=>handlePanelExpand('panel3')}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                        <div className={classes.panelTitle}>Package Management</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                    >
                        {createList(packageManagements)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </GridItem>
            <GridItem {...breakPoints}>
                <ExpansionPanel 
                expanded={expand === 'panel4'} 
                onChange={()=>handlePanelExpand('panel4')}>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                        <div className={classes.panelTitle}>Version Control</div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                    >
                        {createList(versionControls)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </GridItem>
        </GridContainer>
        </ThemeProvider>
    )
}

export default SectionSkills;