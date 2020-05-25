import { createMuiTheme } from '@material-ui/core/styles';

const borderRadius = '25px';
const roundedMargin = '1.5% auto 1.5% auto';
const panelColor = '#fff';

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
                position: 'relative',
                border:'1px solid rgba(0,0,0,0.5)',
                overflow: 'visible',
                '&:before':{
                    position:'absolute',
                    content:'""',
                    left:'0',
                    top:'0',
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0,0.2)',
                    zIndex:'-1',
                    boxShadow: `0 0 16px rgba(0,0,0,0.85),
                                0 0 20px rgba(0,0,0,0.3)
                    `,
                },
            }
        },
        MuiFab: {
            primary: {
                backgroundColor: '#f52d0a',
                '&:hover': {
                    backgroundColor: '#f52d0a',
                },
            }
        },
    }
});

export default theme;