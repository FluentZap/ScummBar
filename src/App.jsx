import React from 'react';
import 'typeface-roboto';
import Navbar from './components/navbar/Navbar';
import TapCategory from './components/tapcategory/TapCategory';
import { makeStyles } from '@material-ui/core/styles';
import woodBackground from './assets/woodBackground.jpg'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;

const useStyles = makeStyles(theme => ({
  App: {
    backgroundImage: `url('${woodBackground}')`,
    width: '100vw',    
    minHeight: 'calc(100vh - 0px)',
    overflowX: 'hidden',
    backgroundPositionX: 'center',
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8D6E63',
    },
  },
});


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.App}>
        <Navbar
          location="Tap List"
        />
        <TapCategory />
      </div>
    </ThemeProvider>
  );
}

export default App;
