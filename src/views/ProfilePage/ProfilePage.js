import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FaceIcon from '@material-ui/icons/Face';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

// core components
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from '@material-ui/core/Tooltip';

import SectionIntro from 'views/Sections/SectionIntro';
import SectionSkills from 'views/Sections/SectionSkills';
import SectionExp from 'views/Sections/SectionExperience';
import SectionLearn from 'views/Sections/SectionLearn';
import SectionProj from 'views/Sections/SectionProjects';
import SectionHobbies from 'views/Sections/SectionHobbies';
import SectionNav from 'views/Components/SectionNav';

import HeaderBarDrawer from 'views/Components/HeaderBarDrawer';

import {ThemeProvider} from '@material-ui/core/styles';
import profileTheme from 'assets/theme/profileTheme';

import profile from "assets/img/faces/me.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const introRef = React.createRef();
const skillsRef = React.createRef();
const projectsRef = React.createRef();
const experiencesRef = React.createRef();
const hobbiesRef = React.createRef();
const learnRef = React.createRef();

//Speed Dial actions
const actions = [
  { icon: <FaceIcon />, name: 'About Me', sectionRef:introRef },
  { icon: <CodeIcon />, name: 'Skills', sectionRef:skillsRef },
  { icon: <WorkIcon />, name: 'Experiences', sectionRef:experiencesRef },
  { icon: <CollectionsBookmarkIcon />, name: 'Learn', sectionRef:learnRef },
  { icon: <BuildIcon />, name: 'Projects', sectionRef:projectsRef },
  { icon: <DirectionsRunIcon />, name: 'Hobbies', sectionRef:hobbiesRef },
];

const scrollToSection = (sectionRef, yOffset, behavior='smooth')=>{
  const top = sectionRef.current.getBoundingClientRect().top;
  window.scroll({top:window.pageYOffset+top+yOffset, behavior: behavior})
}

const getDrawerMenuData = ()=>{
  return(
    [
      {
        title:'common',
        items:[
          <div>asdfadsf</div>,
          <div>asdfadsf</div>,
          <div>asdfadsf</div>,
        ]
      },
      {
        title:'sections',
        items:[
          <div>asdfadsf</div>,
          <div>asdfadsf</div>,
          <div>asdfadsf</div>,
        ]
      },
    ]
  )
}

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <ThemeProvider theme={profileTheme}>
      <div>
        {/*<Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          brand=''
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />*/}
        <HeaderBarDrawer drawerMenuData={getDrawerMenuData()} />
        <Parallax small filter image={require('assets/img/profile-bg2.jpeg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.contentContainer}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <Tooltip title='Nelson' placement='bottom'
                  classes={{tooltip:classes.tooltip}} >
                    <h3 className={classes.title}>Ming-Chun Hung</h3>
                  </Tooltip>
                  <h6>Programmer</h6>
                </div>
              </div>
              <SectionIntro ref={introRef} />
              <SectionSkills ref={skillsRef} />
              <SectionExp ref={experiencesRef} />
              <SectionLearn ref={learnRef} />
              <SectionProj ref={projectsRef} />
              <SectionHobbies ref={hobbiesRef} />
            </div>
        </div>
        <SectionNav actions={actions.reverse()} scrollOffset={-72} />
      </div>
    </ThemeProvider>
  );
}
