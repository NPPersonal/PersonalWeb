import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Tooltip from '@material-ui/core/Tooltip';

import SectionIntro from 'views/Sections/SectionIntro';
import SectionSkills from 'views/Sections/SectionSkills';
import SectionExp from 'views/Sections/SectionExperience';
import SectionProj from 'views/Sections/SectionProjects';

import aboutMeData from 'assets/data/aboutMeData';

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Profile"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div>
            <GridContainer justify="center" alignItems='center' direction='column'>
              <GridItem xs={12} sm={12} md={10}>
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
              </GridItem>
              <GridItem xs={12}>
                <SectionIntro />
              </GridItem>
              <GridItem xs={12}>
                <SectionSkills />
              </GridItem>
              <GridItem xs={12}>
                <SectionExp />
              </GridItem>
              <GridItem xs={12}>
                <SectionProj />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
