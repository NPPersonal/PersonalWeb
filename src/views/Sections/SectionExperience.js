import React from 'react';

//import from material-ui core
import {withStyles} from '@material-ui/core/styles';

//import from template componets
import TitleGridContainer from 'views/Components/TitleGridContainer';
import ListPanel from 'views/Components/ListPanel';

//style and theme
import experienceStyle from 'assets/jss/material-kit-react/sections/experienceStyle.js';

//react-markdown
import ReactMarkdown from 'react-markdown/with-html';

//experience data
import {getExperiences, expDescription} from 'assets/data/expData';

class SectionExperience extends React.Component {
    constructor(){
        super();
        this.state = {
            expand: '',
            md: null
        }
    }

    componentWillMount(){

        getExperiences()
        .then(res=>this.setState({...this.state, md:res}));
    }

    transformExpToPanel(exps){
        if(!exps) return null;
        const {classes} = this.props;
        return exps.map(exp=>{
            return {
                summary: (<div className={classes.panelTitle}>{exp.title}</div>),
                detail: (
                <div>
                    <ReactMarkdown source={exp.content} escapeHtml={false} />
                </div>
                ),
            }
        })
    }

    render(){
        return (
            <TitleGridContainer desc={expDescription}>
            {
                <ListPanel panelList={this.transformExpToPanel(this.state.md)} />
            }
            </TitleGridContainer>
        );
    }
    
}

export default withStyles(experienceStyle)(SectionExperience);