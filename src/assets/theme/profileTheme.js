import { createMuiTheme } from '@material-ui/core/styles';

const borderRadius = '25px';
const roundedMargin = '1.5% auto 1.5% auto';
const panelColor = '#fcf8f3';

const theme = createMuiTheme({
    overrides: {
        MuiExpansionPanel: {
            root: {
                border: '1px solid #a1a1a1',
                margin: roundedMargin,
                backgroundColor: panelColor, 
                '&:before': {
                    backgroundColor: 'transparent !important',
                },
                '&$rounded': {
                    borderRadius,
                    margin: roundedMargin
                },
                '&$rounded:first-child': {
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    margin: roundedMargin,
                },
                '&$rounded:last-child': {
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    margin: roundedMargin,
                },
                '&$expanded': {
                    borderRadius,
                    margin: roundedMargin
                },
                '&$expanded:first-child': {
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    margin: roundedMargin,
                },
                '&$expanded:last-child': {
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    margin: roundedMargin,
                },
            },
        },
        MuiExpansionPanelSummary: {
            root: {
                backgroundColor: panelColor,
                borderRadius,
            }
        },
        MuiExpansionPanelDetails: {
            root: {
                backgroundColor: panelColor,
                borderRadius
            }
        },
        MuiCardMedia: {
            root: {
                marginTop:'2%',
                marginLeft:'2%',
                marginRight:'2%',
                padding:'2%',
                backgroundColor:'#ffffff',
                borderBottom: '1px solid #5e5d5d',
            },
        },
        MuiCardContent: {
            root: {
                height: '100%',
            }
        },
        MuiCard: {
            root: {
                border:'1px solid #a1a1a1',
                '&:before, &:after':{
                    position:'absolute',
                    content:'""',
                    bottom:'22px',
                    left:'7%',
                    top:'auto',
                    width:'44%',
                    height:'20px',
                    backgroundColor:'#777',
                    zIndex:'-1',
                    boxShadow: '0 15px 10px #777',
                    transform: 'rotate(-4deg)',
                },
                '&:after':{
                    right:'7%',
                    left:'auto',
                    transform: 'rotate(4deg)',
                }
                
            }
        },
    }
});

export default theme;