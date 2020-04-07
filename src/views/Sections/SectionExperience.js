import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

//import from material-ui core
import {withStyles} from '@material-ui/core/styles';

//import from template componets
import ListPanel from 'views/Components/ListPanel';

//style and theme
import experienceStyle from 'assets/jss/material-kit-react/sections/experienceStyle.js';

//react-markdown
import ReactMarkdown from 'react-markdown/with-html';

//experience data
import {getExperiences, expDescription, exps} from 'assets/data/expData';

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

    transformExpToTimeline(exps){
        return (
            <VerticalTimeline>
            {
                exps.map((exp,index)=>{
                    return (
                        <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        contentStyle={{...exp.contentStyle}}
                        contentArrowStyle={{...exp.contentArrowStyle}}
                        iconStyle={{...exp.iconStyle}}
                        icon={<WorkOutlineIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                            <p>
                            {exp.desc}
                            </p>
                        </VerticalTimelineElement>
                    )
                })
            }
            </VerticalTimeline>
        );
    }

    getTitle = ()=>{
        return <Title 
        title='Experience' 
        subtitle='Work experiences' 
        subtitleColor='#787772' />;
    }

    getDesc = ()=>{
        const {classes} = this.props;
        return (
            <div>
                <p className={classes.descText}>
                {expDescription}
                </p>
            </div>
        );
    }

    getContent = ()=>{
        // return <ListPanel panelList={this.transformExpToPanel(this.state.md)} />;
        return this.transformExpToTimeline(exps);
    }

    render(){
        const {forwardRef} = this.props;

        return (
            <SectionContainer
            ref={forwardRef}
            title={this.getTitle()}
            desc={this.getDesc()}
            content={this.getContent()}
            backdropColor='#decef2'
            />
        )
    }
    
}

export default withStyles(experienceStyle)(
    React.forwardRef((props, ref)=><SectionExperience forwardRef={ref} {...props} />)
);