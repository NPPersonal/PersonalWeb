import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';

import {makeStyles} from '@material-ui/core/styles';

import learnStyle from 'assets/jss/material-kit-react/sections/learnStyle';

import {learnDescription, learns} from 'assets/data/learnData';


const useStyle = makeStyles(learnStyle);

const SectionLearn = ({forwardRef}) => {

    const classes = useStyle();

    const transformLearnsToTimeline = (learns)=>{
        return (
            <VerticalTimeline>
            {
                learns.map((learn,index)=>{
                    return (
                        <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element--work'
                        contentStyle={{...learn.contentStyle}}
                        contentArrowStyle={{...learn.contentArrowStyle}}
                        iconStyle={{...learn.iconStyle}}
                        icon={<MenuBookIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{learn.school}</h3>
                            <h4 className="vertical-timeline-element-title">{learn.major}</h4>
                            <h4 className="vertical-timeline-element-subtitle">{learn.location}</h4>
                            <p>
                            {learn.desc}
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
        title='Learn' 
        subtitle='Education and learning' 
        subtitleColor='#787772' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {learnDescription}
                </p>
            </div>
        );
    }

    const getContent = ()=>{
        return transformLearnsToTimeline(learns);
    }

    return (
        <SectionContainer
            ref={forwardRef}
            title={getTitle()}
            desc={getDesc()}
            content={getContent()}
            backdropColor='#e0e0e0'
        />
    );
};

export default React.forwardRef((props, ref)=><SectionLearn forwardRef={ref} {...props} />);