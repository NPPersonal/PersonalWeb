import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

//style and theme
import experienceStyle from 'assets/jss/material-kit-react/sections/experienceStyle.js';

//experience data
import {expDescription, exps} from 'assets/data/expData';

const useStyle = makeStyles(experienceStyle);

const SectionExperience = ({forwardRef})=>{

    const classes = useStyle();

    const transformExpToTimeline = (exps)=>{
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

    const getTitle = ()=>{
        return <Title 
        title='Experience' 
        subtitle='Work experiences' 
        subtitleColor='#787772' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {expDescription}
                </p>
            </div>
        );
    }

    const getContent = ()=>{
        return transformExpToTimeline(exps);
    }

    return (
        <SectionContainer
        ref={forwardRef}
        title={getTitle()}
        desc={getDesc()}
        content={getContent()}
        backdropColor='#e0e0e0'
        />
    )
    
}

export default React.forwardRef((props, ref)=><SectionExperience forwardRef={ref} {...props} />);