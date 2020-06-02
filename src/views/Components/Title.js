import React from 'react';
import classNames from "classnames";

import {makeStyles} from '@material-ui/core/styles';

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
            boxShadow: titleShadow?'0 0 20px 0 #ff0b03':'none',
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
            <div className={titleClasses}>{title}</div>
            <div className={subtitleClasses}>{subtitle}</div>
        </div>
    );
};

export default Title;