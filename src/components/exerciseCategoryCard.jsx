import React from 'react';
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
import ExerciseModal from './exerciseModal'; 
import { ExerciseProvider } from './context/exercisesContext';
import Chip from '@material-ui/core/Chip'
import Accessibility from '@material-ui/icons/Accessibility'
import Divider from '@material-ui/core/Divider'; 
import Button from '@material-ui/core/Button'
import ExercisesPage from './ExercisesDetails';
import {Link, useParams} from 'react-router-dom'; 

const ExerciseCategoryCard = ({categoryName, categoryId}) => {
  let listOfFavs = [] 
  
  // function handleAddFav (exId){
  //   listOfFavs.push(exId)

  // }

  // const handleRemoveFav = (exId) => {
  //   let temp = listOfFavs.filter(fav => { return fav != exId});
  //   listOfFavs = temp; 
    
  // }

  return (
        <Card >
      <CardContent>
          <div>
          
            
         
          <Typography variant="h5" style={{paddingTop: 30}}>
          {categoryName}
          </Typography>
          </div>
        </CardContent>
     <Divider/>
     
      <CardActions disableSpacing>
      
        
          <ExerciseModal selectedCategory={categoryId}  />
      
          
      
        </CardActions>
    </Card>
    
    )
}

export default ExerciseCategoryCard; 