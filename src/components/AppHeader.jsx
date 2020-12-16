import React from 'react';
import { Anchor, Box, Grommet, Header , Footer, Text, Main, Clock} from "grommet";
import { grommet } from "grommet/themes";
import { Typography } from '@material-ui/core';


const AppHeader = () => {
    return (
      <Header background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" pad="small" style={{position:'sticky', top:0}}>
   
      <Box direction="row" gap="medium">
        <Typography variant="h2" style={{paddingLeft: 260, color:'white'}} >Fitness App</Typography>
        
        <div className="main-clock">
        <Clock type="digital" color="light-1" size="xxlarge" margin="small"/>
            </div>
      </Box>
    </Header>
    )
}

export default AppHeader; 