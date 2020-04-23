import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const skillStyle = {
    ...generalStyle,
    imageContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    image:{
        width:'100%',
        objectFit: 'contain'
    },
    cardHeight:{
        height:'100%'
    },
    cardTitle:{
        width:'100%',
        fontWeight: '800',
        textAlign:'center !important'
    },
    itemText:{
        width:'100%',
        fontWeight: '400',
        textAlign: 'center !important'
    }
}

export default skillStyle;