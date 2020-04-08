import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiCard:{
            root:{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center'
            }
        },
        MuiCardContent:{
            root:{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center'
            }
        },
        MuiCardHeader:{
            title:{
                fontSize:'1.2rem'
            }
        }
    }
});

export default theme;