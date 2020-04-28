import React from 'react';

import {ThemeProvider, makeStyles} from '@material-ui/core/styles';
import ProjectCardTheme from 'assets/theme/projectCardTheme';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import {randomRange} from 'utils.js';



const ProjectCard = ({
    title, 
    content, 
    actions,
    ...rest
}) => {
    const defaultStyle = {
        background:{
            '&:before,&:after':{
                position:'absolute',
                content:'""',
                top:'0',
                left:'0',
                width:'100%',
                height:'100%',
                background:'#f5f5f5',
                border:'1px solid #a1a1a1',
                borderRadius:'4px',
                boxShadow:'0 0 7px rgba(0,0,0,0.5)',
                transform:`rotate(${randomRange(-12,6)}deg)`,
                zIndex:'-1',
            },
            '&:after':{
                transform:`rotate(${randomRange(-12,6)}deg)`,
            }
        },
    }
    
    const useStyle = makeStyles(defaultStyle);
    const classes = useStyle();

    return (
        <ThemeProvider theme={ProjectCardTheme}>
            <Card {...rest}>
            <CardContent>
            {
                !title?null:
                <CardHeader title={title} />
            }
            {
                !content?null:
                
                    <div>{content}</div>
            }
            </CardContent>
            {
                !actions?null:
                <CardActions>
                {
                actions.map((action, index)=><div key={index}>{action}</div>)
                }
                </CardActions>
            }
            <div className={classes.background}></div>
            </Card>
        </ThemeProvider>
    );
};

export default ProjectCard;