import React from 'react';

import {ThemeProvider} from '@material-ui/core/styles';
import ProjectCardTheme from 'assets/theme/projectCardTheme';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const ProjectCard = ({
    title, 
    content, 
    actions,
    ...rest
}) => {
    console.log(title)
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
            </Card>
        </ThemeProvider>
    );
};

export default ProjectCard;