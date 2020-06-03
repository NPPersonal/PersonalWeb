import React from 'react';
import classNames from "classnames";

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Title = ({
    title,
    titleColor='#fff',
    titleBackgroundColor='#f04f27',
    titleShadow=true,
    titleFontSize='2rem', 
    titleFontWeight='800',
    titleUnderline=false,
    subtitle,
    subtitleColor='#fc6e1c', 
    subtitleFontSize='1rem',
    subtitleFontWeight='600',
    align='center',

}) => {
    const titleStyle = {
        align: {
            textAlign: `${align} !important`
        },
        title: {
            color: titleColor,
            backgroundColor: titleBackgroundColor,
            fontSize: titleFontSize,
            fontWeight: titleFontWeight,
            textDecoration: titleUnderline?'underline':'none',
            lineHeight: '1.5em',
            borderRadius: '5px',
            boxShadow: titleShadow?'0 0 10px 5px #f04f27':'none',
        },
        subtitle: {
            paddingTop:'0.5%',
            color: subtitleColor,
            fontSize: subtitleFontSize,
            fontWeight: subtitleFontWeight
        }
    }
    const useStyle = makeStyles(titleStyle);

    let classes = useStyle();

    const titleClasses = classNames(
        classes.title,
        classes.align
    );

    const subtitleClasses = classNames(
        classes.subtitle,
        classes.align
    );

    return (
        <div>
            <div className={titleClasses}>
                <Typography variant='h3'>{title}</Typography>
            </div>
            <div className={subtitleClasses}>
                <Typography variant='h4'>{subtitle}</Typography>
            </div>
        </div>
    );
};

export default Title;