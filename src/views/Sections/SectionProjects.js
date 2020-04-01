import React from 'react';

//import from material-ui core
import {withStyles, ThemeProvider} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import from template componets
import TitleGridContainer from 'views/Components/TitleGridContainer';

//react-markdown
import ReactMarkdown from 'react-markdown/with-html';

//style and theme
import projectStyle from 'assets/jss/material-kit-react/sections/projectsStyle';
import panelTheme from 'assets/theme/expansionPanelTheme.js';

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

    handlePanelExpand(panelName){
        if(this.state.expand === panelName){
            this.setState({...this.state, expand: ''})
        }
        else{
            this.setState({...this.state, expand: panelName})
        } 
    }

    renderProjectMD(projects){
        const {classes} = this.props;
        if(!projects) return null;
        return(
            <ThemeProvider theme={panelTheme}>
                <div>
                {
                    projects.map((exp, index)=>{
                        return (
                            <ExpansionPanel
                            key={index}
                            expanded={this.state.expand === `panel${index+1}`} 
                            onChange={()=>this.handlePanelExpand(`panel${index+1}`)}>
                                <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                >
                                    <div className={classes.panelTitle}>{exp.title}</div>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <ReactMarkdown source={exp.content} escapeHtml={false} />
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        );
                    })
                }
                </div>
            </ThemeProvider>
        )
    }

    render(){
        return (
            <TitleGridContainer title='Projects' desc={projectDescription}>
            {
                this.renderProjectMD(this.state.md)
            }
            </TitleGridContainer>
        )
    }
};

export default withStyles(projectStyle)(SectionProjects);