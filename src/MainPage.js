import React from 'react' 
import { Anchor, Box, Grommet, Header , Footer, Text, Main, Clock} from "grommet";
import { grommet } from "grommet/themes";
import './App.css'
import Login from './Login'
import Typography from '@material-ui/core/Typography'


class MainPage extends React.Component {
    render() {
        return (
            <Grommet theme={grommet}>
    <Header background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" pad="small">
   
      <Box direction="row" gap="medium">
      <Typography variant="h2" style={{paddingLeft: 260, color:'white'}} >Fitness App</Typography>
        
        <div className="main-clock">
        <Clock type="digital" color="light-1" size="xxlarge" margin="small"/>
        </div>
      </Box>
    </Header>
    <div>
    <Main className="login-pad" pad="large" align="center">
  <Login/>
</Main>
    </div>
    <Footer className="main-footer" background="light-4" justify="center" pad="small" as="footer">
      <Text textAlign="center" size="small">
        © 2020 Chamira Balasuriya
      </Text>
    </Footer>
  </Grommet>
        )
    }
}

export default MainPage