import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BannerScroll from '../../assets/bannerSmall.png'

const useStyles = makeStyles(theme => ({
  root: {
    gridRow: '1 / 2',
    gridColumn: '1 / 3',
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


export default function BannerTitle(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={BannerScroll} alt="Banner Scroll" />
      <h5 className={classes.beerName}>{props.name}</h5>
    </div>
  );
}