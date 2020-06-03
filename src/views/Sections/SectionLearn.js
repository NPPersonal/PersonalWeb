import React from 'react';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Typography from '@material-ui/core/Typography';

import MenuBookIcon from '@material-ui/icons/MenuBook';

import {makeStyles} from '@material-ui/core/styles';

import learnStyle from 'assets/jss/material-kit-react/sections/learnStyle';

import {learnDescription, learns} from 'assets/data/learnData';


const useStyle = makeStyles(learnStyle);

const currentLearnStyle={
    contentStyle:{ background: '#ff7c6b', color: '#000' },
    contentArrowStyle:{ borderRight: '7px solid  #ff7c6b' },
    iconStyle:{ background: '#ff7c6b', color: '#fff' }
}
const previousLearnStyle={
    contentStyle:{ background: '#61bbff', color: '#000' },
    contentArrowStyle:{ borderRight: '7px solid  #61bbff' },
    iconStyle:{ background: '#61bbff', color: '#fff' }
}

const SectionLearn = ({forwardRef}) => {

    const classes = useStyle();

    const transformLearnsToTimeline = (learns)=>{
        return (
            <VerticalTimeline>
            {
                learns.map((learn,index)=>{
                    const selectedStyle = learn.current?currentLearnStyle:previousLearnStyle;

                    return (
                        <VerticalTimelineElement
                        key={index}
                        className='vertical-timeline-element'
                        contentStyle={{...selectedStyle.contentStyle}}
                        contentArrowStyle={{...selectedStyle.contentArrowStyle}}
                        iconStyle={{...selectedStyle.iconStyle}}
                        icon={<MenuBookIcon />}
                        >
                            <div>
                                <Typography variant='h4'>{learn.school}</Typography>
                                <Typography variant='h5'>
                                    {`${learn.major}, ${learn.location}`}
                                </Typography>
                                <Typography variant='body1'>{learn.desc}</Typography>
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
        title='Learn'
        />;
    }

    const getDesc = ()=>{
        return (
            <pre className={classes.preText}>
                <Typography variant='h5' color='secondary' paragraph>
                    {learnDescription}
                </Typography>
            </pre>
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
        />
    );
};

export default React.forwardRef((props, ref)=><SectionLearn forwardRef={ref} {...props} />);