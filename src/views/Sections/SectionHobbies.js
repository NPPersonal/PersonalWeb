import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import hobbiesStyle from 'assets/jss/material-kit-react/sections/hobbiesStyle';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import HobbieCard from 'views/Components/HobbieCard';

import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

import {hobbiesDescription, hobbies} from 'assets/data/hobbiesData';

const useStyle = makeStyles(hobbiesStyle);

const SectionHobbies = ({
    forwardRef
}) => {
    const classes = useStyle();

    const getTitle = ()=>{
        return <Title 
        title='Hobbies' 
        subtitle='I am interested in' 
        subtitleColor='#787772' />;
    }

    const getDesc = ()=>{
        return (
            <div>
                <p className={classes.descText}>
                {hobbiesDescription}
                </p>
            </div>
        );
    }

    const getContent = (hobbies)=>{
        const cardStyle={
            width:'150px',
            height:'150px',
        }
        const contentStyle={
            backgroundColor: '#d903c0'
        }
        const iconStyle = {
            color:'#ffffff'
        }
        const titleStyle={
            color:'#ffffff'
        }

        return ( 
        <div className={classes.cardCollection}>
        {
            hobbies.map((hobbie, index)=>{
                return (
                    <HobbieCard 
                    key={index}
                    icon={hobbie.icon}
                    title={hobbie.title}
                    cardStyle={cardStyle}
                    contentStyle={contentStyle}
                    iconStyle={iconStyle}
                    titleStyle={titleStyle}
                    />
                );
            })
        }
        </div>
        )
    }

    return (
        <SectionContainer
        ref={forwardRef}
        title={getTitle()}
        desc={getDesc()}
        content={getContent(hobbies)}
        backdropColor='#decef2'
        />
    );
};

export default React.forwardRef((props, ref)=><SectionHobbies forwardRef={ref} {...props} />) ;