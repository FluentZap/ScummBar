import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import BannerScroll from '../../assets/bannerSmall.png'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '230px',
    height: '300px',
    backgroundColor: '#795548',
    margin: '30px auto',
    boxShadow: '4px 4px 10px black',
    borderRadius: '5px',
  },
  card: {
    width: '220px',
    height: '290px',
    backgroundColor: '#A1887F',
    margin: '5px',
    borderRadius: '5px',
    '& img': {
      width: '214px',
      margin: '5px 3px',
    },    
  },
  beerName: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: '-62px',
    fontFamily: `'Quintessential', cursive`,
    fontSize: '21px',
  },
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;


export default function KegCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <img src={BannerScroll} alt=""/>
        <h5 className={classes.beerName}>
          Beer Name
        </h5>
      </div>
    </div>
  );
}