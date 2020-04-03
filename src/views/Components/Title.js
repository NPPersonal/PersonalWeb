import React from 'react';
import classNames from "classnames";

import {makeStyles} from '@material-ui/core/styles';

const Title = ({
    title,
    titleColor='#ff005b',
    titleFontSize='2rem', 
    titleFontWeight='800',
    titleUnderline=false,
    subtitle,
    subtitleColor='#b5b1b1', 
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
            fontSize: titleFontSize,
            fontWeight: titleFontWeight,
            textDecoration: titleUnderline?'underline':'none'
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