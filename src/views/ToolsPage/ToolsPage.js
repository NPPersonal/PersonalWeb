import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import Title from 'views/Components/Title';
import ListPanel from 'views/Components/ListPanel';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import toolsPageStyle from 'assets/jss/material-kit-react/toolsPage/toolsPageStyle';

//skill data
import {tools} from 'assets/data/skillsData';

const breakPoints={
    xs:12,
    sm:6,
    md:5
}

const useStyle = makeStyles(toolsPageStyle);

const ToolsPage = () => {

    const classes = useStyle();

    const transformToolsToPanels = (tools)=>{
        return tools.map(tool=>{
            return {
                summary: (<div className={classes.panelTitle}>{tool.title}</div>),
                detail: (
                    <GridContainer direction='column' justify='center' alignItems='center'>
                    {
                     tool.list.map((item,index)=>{
                         return <GridItem key={index}>{item}</GridItem>
                     })   
                    }
                    </GridContainer>
                )
            }
        });
    }

    return (
        <GridContainer direction='column' justify='center' alignItems='center'>
            <GridItem {...breakPoints}>
                <Title 
                title='Tools'
                titleBackgroundColor='transparent'
                titleShadow={false}
                />
            </GridItem>
            <GridItem {...breakPoints}>
                <ListPanel panelList={transformToolsToPanels(tools)} />
            </GridItem>
        </GridContainer>
    );
};

export default ToolsPage;