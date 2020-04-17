import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const hobbiesStyle = {
    ...generalStyle,
    cardCollection:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    flippedCardText:{
        padding:'1%',
        lineHeight:'1.2',
        textAlign:'center',
        color:'#ffffff',
        fontSize:'1.4rem',
        fontWeight:'400'
    }
}

export default hobbiesStyle;