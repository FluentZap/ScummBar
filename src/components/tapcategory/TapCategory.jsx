import React, { useState } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KegEditIcon from '@material-ui/icons/MoreHoriz'
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'

import MenuItem from '@material-ui/core/MenuItem';

import KegCard from '../kegcard/KegCard';
import dataServe from '../../dataServe';
import Keg from '../../Keg';
import KegCardEdit from '../kegcard/KegCardEdit';

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
  },
  cardContainer: {
    margin: '15px',
  },
  editIcon: {
    margin: '-326px 0px 302px 9px'
  },
  clearIcon: {
    margin: '-326px -160px 302px 160px'
  }
}));

const SellButton = styled(Button)({
  width: '100%',
  fontFamily: `'Risque', cursive`,
  fontSize: '18px'
});

const MyMenuItem = styled(MenuItem)({
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

  const removeKeg = (index) => {
    let newKegs = [...kegs];
    newKegs.splice(index, 1);
    setKegs(newKegs)
    setKegEdit(null)
  }  

  function finishKegEdit() {
    setKegEdit(null);
  }

  const [kegEdit, setKegEdit] = useState(0);
    return (
      <div className={classes.root}>
        <SellButton variant="contained" size="large" color="primary" onClick={addKeg}>Add Keg</SellButton>
        {kegs.map((element, index) => {
          return (
            <div key={element.id} className={classes.cardContainer}>
              {index === kegEdit ?
                <>
                  <KegCardEdit keg={element} />
                  <DoneIcon className={classes.editIcon} onClick={() => finishKegEdit()} />
                  <ClearIcon className={classes.clearIcon} onClick={() => removeKeg(index)} />
                </>
                :
                <>
                  <KegCard keg={element} />
                  <KegEditIcon className={classes.editIcon} onClick={() => setKegEdit(index)} />
                </>
              }
              <SellButton variant="contained" size="large" color="primary" onClick={() => sellPint(index)}>Sell 16 oz</SellButton>
            </div>
          )
        }
        )}
      </div>
    );
}