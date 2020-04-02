import React from 'react';

//import from material-ui core
import {withStyles, ThemeProvider} from '@material-ui/core/styles';

//import from template componets
import TitleGridContainer from 'views/Components/TitleGridContainer';
import ListPanel from 'views/Components/ListPanel';

//react-markdown
import ReactMarkdown from 'react-markdown/with-html';

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

    transformProjectToPanels(projects){
        if(!projects) return null;
        const {classes} = this.props;
        return projects.map(project=>{
            return {
                summary: (<div className={classes.panelTitle}>{project.title}</div>),
                detail: (
                <div>
                    <ReactMarkdown source={project.content} escapeHtml={false} />
                </div>
                ),
            }
        })
    }

    render(){
        return (
            <TitleGridContainer desc={projectDescription}>
                <ListPanel panelList={this.transformProjectToPanels(this.state.md)} />
            </TitleGridContainer>
        )
    }
};

export default withStyles(projectStyle)(SectionProjects);