import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';

//import from material-ui core
import {withStyles} from '@material-ui/core/styles';

import Card from 'views/Components/ProjectCard';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import ReactMarkdown from 'react-markdown/with-html';

//style and theme
import projectStyle from 'assets/jss/material-kit-react/sections/projectsStyle';

//project data
import {getProjects, projectDescription} from 'assets/data/projectsData';
import { Dialog } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const markdownRenderers = {
    link: (prop)=>{
        return (
            <a href={prop.href} target='_blank' rel="noopener noreferrer">{prop.children}</a>
        );
    },
}


class SectionProjects extends React.Component{
    constructor(){
        super();
        this.state = {
            expand: '',
            md: null,
            selectedProject:null,
            showDialog: false,
        }
    }

    componentDidMount(){
        getProjects()
        .then(res=>this.setState({...this.state, md:res}))
    }

    handleOpenDialog(projectIndex){
        this.setState({...this.state, showDialog:true, selectedProject:this.state.md[projectIndex]});
    }

    handleCloseDialog(){
        this.setState({...this.state, showDialog:false, selectedProject:null});
    }

    transformProjectToCard(projects){
        if(!projects) return null;
        const {classes} = this.props;
       return (
            <div className={classes.cardContainer}>
            {
            projects.map((project, index)=>{
                return (
                <div key={index} className={classes.cardWrapper}>
                    <Card 
                    className={classes.cardHeight}
                    title={project.title}
                    content={<div>{project.brief}</div>}
                    actions={[
                        <Button 
                        color='primary'
                        onClick={()=>this.handleOpenDialog(index)}
                        >
                        More
                        </Button>
                    ]}
                    />

                </div>
                );
            })
            }
            </div>
       )
    }

    getTitle = ()=>{
        return <Title title='Projects' />;
    }

    getDesc = ()=>{
        const {classes} = this.props;
        return (
            <pre style={{whiteSpace:'pre-wrap'}}>
                <Typography variant='h5' color='secondary'>{projectDescription}</Typography>
            </pre>
        );
    }

    getContent = ()=>{
        return this.transformProjectToCard(this.state.md);
    }

    render(){
        const {forwardRef} = this.props;

        return (
            <React.Fragment>
                <SectionContainer
                ref={forwardRef}
                title={this.getTitle()}
                desc={this.getDesc()}
                content={this.getContent()}
                />

                {
                !this.state.selectedProject?null:
                <Dialog
                TransitionComponent={Transition}
                open={(this.state.showDialog && this.state.selectedProject?true:false)}
                onClose={()=>this.handleCloseDialog()}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">{this.state.selectedProject.title}</DialogTitle>
                    <DialogContent dividers>
                        <ReactMarkdown
                        source={this.state.selectedProject.content}
                        escapeHtml={false}
                        renderers={markdownRenderers}
                        />
                    </DialogContent>
                    <DialogActions>
                    <Button 
                    color='primary'
                    onClick={()=>this.handleCloseDialog()}
                    >
                    Close
                    </Button>
                    </DialogActions>    
                </Dialog>
                }
            </React.Fragment>
        )
    }
};

export default withStyles(projectStyle)(
    React.forwardRef((props, ref)=><SectionProjects forwardRef={ref} {...props} />)
);