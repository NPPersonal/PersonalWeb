import React from 'react';

import Title from 'views/Components/Title';

//import from material-ui core
import {withStyles} from '@material-ui/core/styles';

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
        const {classes,forwardRef} = this.props;

        return (
            <div ref={forwardRef} className={classes.backdrop}>
                <div className={classes.sectionContent}>
                    <div className={classes.sectionTitle}>
                        <Title title='Projects' subtitle='Projects I worked on' />
                    </div>
                    <TitleGridContainer desc={projectDescription}>
                        <ListPanel panelList={this.transformProjectToPanels(this.state.md)} />
                    </TitleGridContainer>
                </div>
            </div>
        )
    }
};

export default withStyles(projectStyle)(
    React.forwardRef((props, ref)=><SectionProjects forwardRef={ref} {...props} />)
);