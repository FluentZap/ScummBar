import React, { useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import KegCard from '../kegcard/KegCard';
import dataServe from '../../dataServe';
import Keg from '../../Keg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    maxWidth: 1000,
    // height: '412px',
    backgroundColor: '#d7ccc887',
    margin: '30px auto',    
    padding: '15px',
    boxShadow: '4px 4px 10px black',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '1200px',
      width: '300px',
      padding: '10px'
    }
  },
  cardContainer: {
    margin: '15px',    
  }
}));

const SellButton = styled(Button)({
  width: '100%',
  fontFamily: `'Risque', cursive`,
  fontSize: '18px'
});


export default function TapCategory(props) {
  const classes = useStyles();
  const [kegs, setKegs] = useState(dataServe())


  const sellPint = (index) => {
    let newKegs = [...kegs];
    newKegs[index].quantity--;
    setKegs(newKegs)
  }

  const addKeg = () => {
    let newKegs = [...kegs, new Keg()];    
    setKegs(newKegs)
  }


  return (
    <div className={classes.root}>
      <SellButton variant="contained" size="large" color="primary" onClick={addKeg}>Add Keg</SellButton>
      {kegs.map((element, index) => {
        return (
          <div key={index + 'container'} className={classes.cardContainer}>
            <KegCard keg={element} key={index + 'card'}/>                          
            <SellButton variant="contained" size="large" color="primary" key={index + 'button'} onClick={() => sellPint(index)}>Sell 16 oz</SellButton>
          </div>
        )
      })}
    </div>
  );
}