import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Typography from '@material-ui/core/Typography';

import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

//import from material-ui core
import {makeStyles} from '@material-ui/core/styles';

//style and theme
import experienceStyle from 'assets/jss/material-kit-react/sections/experienceStyle.js';

//experience data
import {expDescription, exps} from 'assets/data/expData';

const useStyle = makeStyles(experienceStyle);

const currentExpStyle={
    contentStyle:{ 
        background: '#ff7c6b', 
        color: '#000',
    },
    contentArrowStyle:{ borderRight: '7px solid  #ff7c6b' },
    iconStyle:{ background: '#ff7c6b', color: '#fff' }
}
const previousExpStyle={
    contentStyle:{background: '#61bbff', color: '#000'},
    contentArrowStyle:{ borderRight: '7px solid  #61bbff' },
    iconStyle:{ background: '#61bbff', color: '#fff' }
}

const SectionExperience = ({forwardRef})=>{

    const transformExpToTimeline = (exps)=>{
        return (
            <VerticalTimeline>
            {
                exps.map((exp,index)=>{
                    const selectedStyle = exp.current?currentExpStyle:previousExpStyle;

                    return (
                        <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element'
                        contentStyle={{...selectedStyle.contentStyle}}
                        contentArrowStyle={{...selectedStyle.contentArrowStyle}}
                        iconStyle={{...selectedStyle.iconStyle}}
                        icon={<WorkOutlineIcon />}
                        >
                            <div>
                                <Typography variant='h4'>{exp.title}</Typography>
                                <Typography variant='h5'>
                                    {`${exp.company}, ${exp.location}`}
                                </Typography>
                                <Typography variant='body1'>{exp.desc}</Typography>
                            </div>    
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
        />;
    }

    const getDesc = ()=>{
        return (
            <pre style={{whiteSpace:'pre-wrap'}}>
                <Typography variant='h5' color='secondary'>{expDescription}</Typography>
            </pre>
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
        />
    )
    
}

export default React.forwardRef((props, ref)=><SectionExperience forwardRef={ref} {...props} />);