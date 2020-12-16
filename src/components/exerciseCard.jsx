import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip'
import { ExerciseContext } from './context/exercisesContext';
import Grid from '@material-ui/core/Grid'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ExercisesDetails from './ExercisesDetails';
import Favorite from '@material-ui/icons/Favorite'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { FavouriteContext } from './context/favouriteContext';

const ExerciseCard = ({exName, primary, secondary, exId, favourite}) => {
  const [state, setState] = useState({checkFav: favourite})
  const final = useContext(ExerciseContext);
  const muscles = final.dataMusc.musc;    
  const primaryMuscles = muscles.filter(m => { return primary.includes(m.id)})
  const secondaryMuscles = muscles.filter(m => { return secondary.includes(m.id)})

  const [favourites, setFavourites] = useContext(FavouriteContext);
 

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if(event.target.checked) {
      setFavourites([...favourites, exId]) 
      console.log(favourites)
    } else { 
      let temp = favourites.filter(fav => { return fav != exId});
      setFavourites(temp); 
      console.log(favourites); 
    }
  };

    return (
        <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            R
          </Avatar>
        }
        action={
          <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkFav" onChange={handleChange} checked={state.checkFav}/>}
        label="Like"
      />
        }
        title={exName}
        subheader="September 14, 2016"
      />
      <CardMedia
     
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
      <Grid container spacing={2}>
        
        <Grid item xs={12}>
          <ExercisesDetails primaryMuscles = {primaryMuscles} secondaryMuscles={secondaryMuscles} exId={exId}/>
        </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      <Grid container spacing={1}>
      <Grid item xs={11}/>
      <Grid item xs={1}>
      
      
      </Grid>
      </Grid>
        </CardActions>
    </Card>
    
    )
}

export default ExerciseCard; 