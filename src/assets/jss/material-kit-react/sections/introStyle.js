import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const introStyle = {
    // ...generalStyle,
    textWrapper:{
        display:'flex',
        justifyContent: 'center',
    },
    descText:{
        ...generalStyle.descText,
        textAlign: "left !important",
        margin:'0 0 1em 0',
        whiteSpace: 'pre-wrap',       /* Since CSS 2.1 */
        wordWrap: 'break-word', 
    }
}

export default introStyle;