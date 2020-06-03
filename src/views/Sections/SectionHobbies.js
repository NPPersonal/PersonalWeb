import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import hobbiesStyle from 'assets/jss/material-kit-react/sections/hobbiesStyle';

import Title from 'views/Components/Title';
import SectionContainer from 'views/Components/SectionContainer';
import HobbieCard from 'views/Components/HobbieCard';

import Typography from '@material-ui/core/Typography'

import {hobbiesDescription, hobbies} from 'assets/data/hobbiesData';

const useStyle = makeStyles(hobbiesStyle);

const SectionHobbies = ({
    forwardRef
}) => {
    const classes = useStyle();

    const getTitle = ()=>{
        return <Title 
        title='Hobbies'
        />;
    }

    const getDesc = ()=>{
        return (
            <pre className={classes.preText}>
                <Typography variant='h5' color='secondary' paragraph>
                    {hobbiesDescription}
                </Typography>
            </pre>
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
            backgroundColor: '#047dff'
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
        />
    );
};

export default React.forwardRef((props, ref)=><SectionHobbies forwardRef={ref} {...props} />) ;