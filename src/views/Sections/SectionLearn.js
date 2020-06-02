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

const currentLearnStyle={
    contentStyle:{ background: '#ff7c6b', color: '#000', border:'1px solid #575757' },
    contentArrowStyle:{ borderRight: '7px solid  #575757' },
    iconStyle:{ background: '#ff7c6b', color: '#fff' }
}
const previousLearnStyle={
    contentStyle:{ background: '#61bbff', color: '#000', border:'1px solid #575757' },
    contentArrowStyle:{ borderRight: '7px solid  #575757' },
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
                        className='vertical-timeline-element--work'
                        contentStyle={{...selectedStyle.contentStyle}}
                        contentArrowStyle={{...selectedStyle.contentArrowStyle}}
                        iconStyle={{...selectedStyle.iconStyle}}
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
        />;
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
        />
    );
};

export default React.forwardRef((props, ref)=><SectionLearn forwardRef={ref} {...props} />);