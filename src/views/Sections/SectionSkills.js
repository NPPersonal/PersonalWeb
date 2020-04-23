import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import ToolsPage from 'views/ToolsPage/ToolsPage';

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

import skillStyle from 'assets/jss/material-kit-react/sections/skillsStyle.js';

//skill data
import {skillDescription, programLangs} from 'assets/data/skillsData';

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
            <GridItem key={langIndex} {...breakPoints} style={{padding:'1em'}}>
                <Card className={classes.cardHeight}>
                    <CardMedia>
                        <div className={classes.imageContainer}>
                            <div style={{width:'100%'}}>
                                <img className={classes.image} src={lang.imageSource} />
                            </div>
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
        return <Title 
        title='Skills' 
        subtitle='I am experience in these skills' 
        subtitleColor='#787772' />;
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
        return (
            <GridContainer >
                <GridItem>
                {transformLangsToCards(programLangs)}
                </GridItem>
                <GridItem style={{paddingTop:'1em'}}>
                    <div>
                        <ToolsPage />
                    </div>
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
        backdropColor='#ffffff'
        />
    )
}

export default React.forwardRef((props, ref)=><SectionSkills forwardRef={ref} {...props}/>);