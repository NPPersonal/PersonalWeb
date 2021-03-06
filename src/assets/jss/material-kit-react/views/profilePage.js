import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import tooltipStyle from 'assets/jss/material-kit-react/tooltipsStyle.js';

const profilePageStyle = {
  ...tooltipStyle,
  container,
  profile: {
    textAlign: "center",
    backgroundColor: 'transparent',
    display:'flex',
    flexDirection:'column',
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  subtitle:{
    color: 'white',
    padding: '2% 0 2% 0',
    fontSize: '1.2rem',
    fontWeight: '800',
    textAlign: 'center !important'
  },
  profileSubtitle:{
    color: 'white',
    fontSize: '1.3em',
    fontWeight: '800',
    textAlign: 'center !important'
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#000000",
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: '1.5px',
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    backgroundImage: `url(${require('assets/img/mosaic.png')})`,
    backgroundRepeat: 'repeat',
    position: "relative",
  },
  mainRaised: {
    margin: "-60px 30px 10px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  page:{
    background: 'linear-gradient(180deg, rgba(148,148,149,1) 0%, rgba(193,193,193,1) 50%, rgba(235,235,235,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#949495",endColorstr="#ebebeb",GradientType=1)',
  },
  contentContainer:{
    display:'flex',
    flexDirection:'column',
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color:'white',
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
};

export default profilePageStyle;
