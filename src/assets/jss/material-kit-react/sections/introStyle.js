import generalStyle from 'assets/jss/material-kit-react/sections/generalStyle';

const introStyle = {
    ...generalStyle,
    title:{
        color: 'grey',
        padding: '2% 0 1% 0',
        fontSize: '1.2rem',
        fontWeight: '800',
        textAlign: 'center !important'
    },
    description: {
        margin: "0 auto 0",
        color: "#000000",
        fontWeight: '600',
        fontStyle: 'normal',
        textAlign: "center !important"
    },
    backdrop: {
        backgroundColor: '#d9ddd3'
    }
}

export default introStyle;