import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const experienceStyle = {
    ...generalStyle,
    panelTitle: {
        fontWeight: '600'
    },
    item: {
        textAlign: 'left'
    },
    backdrop:{
        backgroundColor: '#e5ecee'
    },
    cardHeight:{
        height:'100%'
    },
    cardContainer:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    cardWrapper:{
        width:'250px',
        padding:'10px'
    }
}

export default experienceStyle;