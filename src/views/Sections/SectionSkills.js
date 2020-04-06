import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';

//skill data
import {skillList, skillDescription, programLangs, tools} from 'assets/data/skillsData';
import tooltipsStyle from 'assets/jss/material-kit-react/tooltipsStyle';

const useStyle = makeStyles(skillStyle);

const SectionSkills = ({forwardRef})=>{

    const [collapseOpen, setCollapseOpen] = React.useState('');
    const classes = useStyle();

    const handleCollapseClick = (itemName)=>{
        if(itemName===collapseOpen){
            setCollapseOpen('');
            return;
        }

        setCollapseOpen(itemName);
    }

    const transformLangsToCards = (langs)=>{
        const breakPoints={
            xs:12,
            sm:6,
            md:4
        }
       return (
        <GridContainer direction='row' justify='center'  alignItems="stretch">
        {
        langs.map((lang, langIndex)=>{
            return (
            <GridItem key={langIndex} {...breakPoints} style={{padding:'1em'}}>
                <Card className={classes.cardHeight}>
                    <CardMedia>
                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={lang.imageSource} />
                        </div>
                    </CardMedia>
                    <CardContent>
                        <div className={classes.cardTitle}>{lang.title}</div>
                        <List>
                        {
                        lang.frameworks.map((framework, index)=>{
                            return (
                                <ListItem key={index} dense>
                                    <div className={classes.itemText}>{framework}</div>
                                </ListItem>
                            ) 
                        })
                        }
                        </List>
                    </CardContent>
                </Card>
            </GridItem>
            );
        })
        }
        </GridContainer>
       );
    }

    const transformToolsToList = (tools)=>{
        
        return (
            <GridContainer direction='column' justify='center' alignItems='center'>
                <GridItem>
                    <List>
                    {
                        tools.map((tool, index)=>{
                            return (
                                <React.Fragment>
                                    <ListItem 
                                    key={`${tool.title}${index}`} 
                                    onClick={()=>handleCollapseClick(`coll${index}`)}>
                                        <div className={classes.itemText}>{tool.title}</div>
                                        {collapseOpen===`coll${index}`?<ExpandMore/>:<ExpandLess/>}
                                    </ListItem>
                                    <Collapse in={collapseOpen===`coll${index}`} timeout="auto" unmountOnExit>
                                    <List>
                                    {
                                        tool.list.map((item, index)=>{
                                            return(
                                                <ListItem key={index}>
                                                <div className={classes.itemText}>{item}</div>
                                                </ListItem>
                                            )
                                        })
                                    }
                                    </List>
                                    </Collapse>
                                </React.Fragment>
                            )
                        })
                    }
                    </List>
                </GridItem>
            </GridContainer>
        )
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
        // return <ListPanel panelList={transformSkillListToPanels(skillList)} />;
        return (
            <GridContainer >
                <GridItem>
                {transformLangsToCards(programLangs)}
                </GridItem>
                <GridItem style={{paddingTop:'1em'}}>
                    <GridContainer direction='column' justify='center' alignItems='center'>
                        <GridItem>
                            <Title title='Tools' subtitle='Tools I have used' />
                        </GridItem>
                        <GridItem>
                        {transformToolsToList(tools)}
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        )
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