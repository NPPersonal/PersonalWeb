import { createMuiTheme } from '@material-ui/core/styles';

const borderRadius = '25px';
const panelColor = '#fcf8f3';

const theme = createMuiTheme({
    overrides: {
        MuiExpansionPanel: {
            root: {
                border: '1px solid #dee3e2',
                margin: '0.5% auto 0.5% auto',
                backgroundColor: panelColor,
                '&$rounded:first-child&$expanded:first-child': {
                    borderRadius,
                    margin: '0.5% auto 0.5% auto',
                },
                '&$rounded:last-child': {
                    borderRadius,
                },
                '&$expanded:last-child': {
                    borderRadius,
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
        }
    }
});

export default theme;