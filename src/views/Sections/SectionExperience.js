import React from 'react';

//import from material-ui core
import {withStyles, ThemeProvider} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import from template componets
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from 'components/Grid/GridItem.js';

//style and theme
import experienceStyle from 'assets/jss/material-kit-react/sections/experienceStyle.js';
import skillTheme from 'assets/theme/skillsTheme.js';

//react-markdown
import ReactMarkdown from 'react-markdown/with-html';

//work exp markdown
import jtiotMD from 'assets/markdownSrc/experience/jtiot.md';
import artechMD from 'assets/markdownSrc/experience/artech.md'

const breakPoints = {
    xs: 11,
    sm: 11,
    md: 8
}

//experience data
const experiences = [
    {
        title: 'JTIOT',
        mdSrc: jtiotMD
    },
    {
        title: 'Artech',
        mdSrc: artechMD
    }
]

class SectionExperience extends React.Component {
    constructor(){
        super();
        this.state = {
            expand: '',
            md: null
        }
    }

    componentWillMount(){
        const mdSrcs = experiences.map(exp=>{
            return fetch(exp.mdSrc)
            .then(res=>res.text())
            .catch(err=>console.log(err));
        });

        Promise.all(mdSrcs)
        .then(res=>{
            const mds = res.map((mdText, index)=>{
                return {
                    title: experiences[index].title,
                    content: mdText
                }
            })
            this.setState({...this.state, md:mds});
        });
    }

    handlePanelExpand(panelName){
        if(this.state.expand === panelName){
            this.setState({...this.state, expand: ''})
        }
        else{
            this.setState({...this.state, expand: panelName})
        } 
    }

    renderExpMD(exps){
        const {classes} = this.props;
        return exps.map((exp, index)=>{
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

    render(){
        const {classes} = this.props;
        return (
            <ThemeProvider theme={skillTheme}>
            <GridContainer direction='column' justify="center" alignItems='center'>
                <GridItem {...breakPoints}>
                    <div className={classes.title}>Experience</div>
                </GridItem>
                <GridItem {...breakPoints}>
                    <div>
                        <p className={classes.description}>
                        Experience description here 
                        </p>
                    </div>
                </GridItem>
                <GridItem {...breakPoints}>
                    {
                        this.state.md?
                        this.renderExpMD(this.state.md)
                        :null
                    }
                </GridItem>
            </GridContainer>
            </ThemeProvider>
        );
    }
    
}

export default withStyles(experienceStyle)(SectionExperience);