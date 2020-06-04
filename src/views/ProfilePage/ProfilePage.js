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
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

// core components
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from '@material-ui/core/Tooltip';

import SectionIntro from 'views/Sections/SectionIntro';
import SectionSkills from 'views/Sections/SectionSkills';
import SectionExp from 'views/Sections/SectionExperience';
import SectionLearn from 'views/Sections/SectionLearn';
import SectionProj from 'views/Sections/SectionProjects';
import SectionHobbies from 'views/Sections/SectionHobbies';

import HeaderBarDrawer from 'views/Components/HeaderBarDrawer';
import DrawerMenuItem from 'views/Components/DrawerMenu/DrawerMenuItem';
import Logo from 'views/Components/Logo';

import Typography from '@material-ui/core/Typography';

import {ThemeProvider} from '@material-ui/core/styles';
import profileTheme from 'assets/theme/profileTheme';

import profile from "assets/img/faces/me.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

//Section Ref
const introRef = React.createRef();
const skillsRef = React.createRef();
const projectsRef = React.createRef();
const experiencesRef = React.createRef();
const hobbiesRef = React.createRef();
const learnRef = React.createRef();

//Scroll to section
const headerBarOffset = -72;
const scrollToSection = (sectionRef, yOffset, behavior='smooth')=>{
  const top = sectionRef.current.getBoundingClientRect().top;
  window.scroll({top:window.pageYOffset+top+yOffset, behavior: behavior})
}

//Open external link
const emailLink = 'mailto:tomneo2004@gmail.com';
const githubLink = 'https://github.com/tomneo2004?tab=repositories';
const linkedinLink = 'https://www.linkedin.com/in/ming-chung-hung-38125a117/'
const openExternalLink = (link)=>{
  window.open(link);
}

const getDrawerMenuData = ()=>{
  return(
    [
      {
        title:'common',
        items:[
          <DrawerMenuItem 
          icon={<EmailIcon />} 
          title='E-mail Me'
          onClick={()=>openExternalLink(emailLink)}
          />,
          <DrawerMenuItem 
          icon={<GitHubIcon />} 
          title='GitHub'
          onClick={()=>openExternalLink(githubLink)}
          />,
          <DrawerMenuItem 
          icon={<LinkedInIcon />} 
          title='LinkedIn'
          onClick={()=>openExternalLink(linkedinLink)}
          />,
        ]
      },
      {
        title:'sections',
        items:[
          <DrawerMenuItem 
          icon={<FaceIcon />} 
          title='About Me'
          onClick={()=>scrollToSection(introRef, headerBarOffset)}
          />,
          <DrawerMenuItem 
          icon={<CodeIcon />} 
          title='Skills'
          onClick={()=>scrollToSection(skillsRef, headerBarOffset)}
          />,
          <DrawerMenuItem 
          icon={<WorkIcon />} 
          title='Experiences'
          onClick={()=>scrollToSection(experiencesRef, headerBarOffset)}
          />,
          <DrawerMenuItem 
          icon={<CollectionsBookmarkIcon />} 
          title='My learning'
          onClick={()=>scrollToSection(learnRef, headerBarOffset)}
          />,
          <DrawerMenuItem 
          icon={<BuildIcon />} 
          title='Projects'
          onClick={()=>scrollToSection(projectsRef, headerBarOffset)}
          />,
          <DrawerMenuItem 
          icon={<DirectionsRunIcon />} 
          title='Hobbies'
          onClick={()=>scrollToSection(hobbiesRef, headerBarOffset)}
          />,
        ]
      },
    ]
  )
}

export default function ProfilePage() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <ThemeProvider theme={profileTheme}>
      <div className={classes.page}>
        <HeaderBarDrawer brand={<Logo />} drawerMenuData={getDrawerMenuData()} />
        <Parallax small filter image={require('assets/img/profile-bg2.jpeg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.contentContainer}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <Tooltip 
                  title='Nelson' 
                  placement='bottom'
                  classes={{tooltip:classes.tooltip}} 
                  >
                    <Typography variant='h4' color='secondary'>Ming-Chun Hung</Typography>
                  </Tooltip>
                  <Typography variant='h5' color='secondary'>Programmer</Typography>
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
      </div>
    </ThemeProvider>
  );
}
