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
<<<<<<< HEAD
                '&$rounded:first-child&$expanded:first-child&$rounded&$expanded': {
=======
                '&:before': {
                    backgroundColor: 'transparent',
                },
                '&$rounded': {
>>>>>>> dev
                    borderRadius,
                    margin: roundedMargin
                },
                '&$rounded:first-child': {
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    margin: roundedMargin,
                },
<<<<<<< HEAD
                '&$rounded:last-child&$rounded': {
=======
                '&$rounded:last-child': {
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    margin: roundedMargin,
                },
                '&$expanded': {
>>>>>>> dev
                    borderRadius,
                    margin: roundedMargin
                },
                '&$expanded:first-child': {
                    borderTopLeftRadius: borderRadius,
                    borderTopRightRadius: borderRadius,
                    margin: roundedMargin,
                },
<<<<<<< HEAD
                '&$expanded:last-child&$expanded': {
                    borderRadius,
=======
                '&$expanded:last-child': {
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius,
                    margin: roundedMargin,
>>>>>>> dev
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