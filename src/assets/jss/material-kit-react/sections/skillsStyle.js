import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const skillStyle = {
    ...generalStyle,
    panelTitle: {
        fontWeight: '600'
    },
    item: {
        textAlign: 'left'
    },
    backdrop:{
        backgroundColor: '#B1A64C'
    },
    imageContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#f5f2f2'
    },
    image:{
        width:'100%',
        objectFit: 'cover'
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