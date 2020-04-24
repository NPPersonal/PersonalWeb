import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import hobbiesStyle from 'assets/jss/material-kit-react/sections/hobbiesStyle';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import HobbieCard from 'views/Components/HobbieCard';

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
        />;
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

    const getFlippedCardDesc = (desc)=>{
        return (
        <div 
        className={classes.flippedCardText}
        >
        {desc}
        </div>
        );
    }

    const getContent = (hobbies)=>{
        const cardStyle={
            width:'150px',
            height:'150px',
        }
        const frontContentStyle={
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
                    flipContent={getFlippedCardDesc(hobbie.desc)}
                    cardStyle={cardStyle}
                    frontContentStyle={frontContentStyle}
                    backContentStyle={frontContentStyle}
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
        backdropColor='#e0e0e0'
        />
    );
};

export default React.forwardRef((props, ref)=><SectionHobbies forwardRef={ref} {...props} />) ;