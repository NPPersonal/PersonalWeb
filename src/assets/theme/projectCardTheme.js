import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiCard:{
            root:{
                position:'relative',
                overflow:'visible',
                width:'100%',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                alignItems:'center',
                border:'1px solid #a1a1a1',
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