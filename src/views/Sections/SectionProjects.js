import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';

//import from material-ui core
import {withStyles} from '@material-ui/core/styles';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from 'views/Components/ProjectCard';

import Button from '@material-ui/core/Button';

//style and theme
import projectStyle from 'assets/jss/material-kit-react/sections/projectsStyle';

//project data
import {getProjects, projectDescription} from 'assets/data/projectsData';

class SectionProjects extends React.Component{
    constructor(){
        super();
        this.state = {
            expand: '',
            md: null
        }
    }

    componentWillMount(){
        getProjects()
        .then(res=>this.setState({...this.state, md:res}))
    }

    transformProjectToCard(projects){
        if(!projects) return null;
        const {classes} = this.props;
        const breakPoints={
            xs:12,
            sm:6,
            md:4
        }
       return (
            <div className={classes.cardContainer}>
            {
            projects.map((project, index)=>{
                console.log(project);
                return (
                <div key={index} className={classes.cardWrapper}>
                    <Card 
                    className={classes.cardHeight}
                    title={project.title}
                    content={<div>{project.brief}</div>}
                    actions={[<Button color='primary'>More</Button>]}
                    />

                </div>
                );
            })
            }
            </div>
       )
    }

    getTitle = ()=>{
        return <Title title='Projects' subtitle='Projects I worked on' />;
    }

    getDesc = ()=>{
        const {classes} = this.props;
        return (
            <div>
                <p className={classes.descText}>
                {projectDescription}
                </p>
            </div>
        );
    }

    getContent = ()=>{
        return this.transformProjectToCard(this.state.md);
    }

    render(){
        const {forwardRef} = this.props;

        return (
            <SectionContainer
            ref={forwardRef}
            title={this.getTitle()}
            desc={this.getDesc()}
            content={this.getContent()}
            backdropColor='#e5ecee'
            />
        )
    }
};

export default withStyles(projectStyle)(
    React.forwardRef((props, ref)=><SectionProjects forwardRef={ref} {...props} />)
);