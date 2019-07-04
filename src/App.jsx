import React from 'react';
import 'typeface-roboto';
import Navbar from './components/navbar/Navbar';
import TapCategory from './components/tapcategory/TapCategory';
import { makeStyles } from '@material-ui/core/styles';
import woodBackground from './assets/woodBackground.jpg'


// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;

const useStyles = makeStyles(theme => ({
  App: {
    backgroundImage: `url('${woodBackground}')`,
    width: '100vw',
    height: '100vh',
    backgroundPositionX: 'center',
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'cover',    
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Navbar
        location="Tap List"
      />
      <TapCategory />
    </div>
  );
}

export default App;
