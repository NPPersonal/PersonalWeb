import { createMuiTheme } from '@material-ui/core/styles';

const borderRadius = '25px';
const roundedMargin = '1.5% auto 1.5% auto';
const panelColor = '#fcf8f3';

const theme = createMuiTheme({
    overrides: {
        MuiExpansionPanel: {
            root: {
                border: '1px solid #dee3e2',
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
    }
});

export default theme;