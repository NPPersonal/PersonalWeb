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
        icon:<AirplanemodeActiveIcon {...iconProps} />
    },
    {
        title:'Gym',
        icon:<FitnessCenterIcon {...iconProps} />
    },
    {
        title:'Music',
        icon:<MusicNoteIcon {...iconProps} />
    },
    {
        title:'Movie',
        icon:<LocalMoviesIcon {...iconProps} />
    },
    {
        title:'Game',
        icon:<SportsEsportsIcon {...iconProps} />
    },
]
export const hobbiesDescription = `An artist of considerable range, Chet Faker — the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
and records all of his own music, giving it a warm, intimate
feel with a solid groove structure.`;