import React from 'react';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const iconProps={style:{fontSize:40}}
export const hobbies = [
    {
        title:'Travel',
        icon:<AirplanemodeActiveIcon {...iconProps} />,
        desc:'Explor, Culture, Scenic tour, Activity'
    },
    {
        title:'Gym',
        icon:<FitnessCenterIcon {...iconProps} />,
        desc:'Weight lifting'
    },
    {
        title:'Music',
        icon:<MusicNoteIcon {...iconProps} />,
        desc:'Rock, 80\'s, 90\'s, Pop'
    },
    {
        title:'Movie',
        icon:<LocalMoviesIcon {...iconProps} />,
        desc:'Action, Sci-fi'
    },
    {
        title:'Game',
        icon:<SportsEsportsIcon {...iconProps} />,
        desc:'Video game, Card game'
    },
]
export const hobbiesDescription = `I do different activities when I have time and they fulfil
other part of my life`;