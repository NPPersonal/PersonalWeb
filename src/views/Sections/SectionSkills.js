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
import ListItemText from '@material-ui/core/ListItemText';

import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';

//skill data
import {skillList, skillDescription, programLangs} from 'assets/data/skillsData';

const useStyle = makeStyles(skillStyle);

const SectionSkills = ({forwardRef})=>{

    const classes = useStyle();

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
            <GridItem key={langIndex} {...breakPoints} style={{padding:'10px'}}>
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
        return transformLangsToCards(programLangs);
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