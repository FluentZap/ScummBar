import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import BannerScroll from '../../assets/bannerSmall.png'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BannerTitle from './BannerTitle';
import KegDisplay from './KegDisplay';

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
  quantity: {    
    textAlign: "center",
    margin: '-30px 0 5px',
    fontFamily: `'Quintessential', cursive`,
    fontSize: '21px',
  },
  kegDetails: {
    textAlign: "left",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
  },
  hopDetails: {
    textAlign: "left",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '14px',
  },
  
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;


export default function KegCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <BannerTitle name={props.keg.name}/>
        <h3 className={classes.quantity}>{props.keg.quantity} / 124</h3>
        <KegDisplay
          quantity={props.keg.quantity}
          color={props.keg.color}/>
        <h4 className={classes.kegDetails}>Style: {props.keg.style}</h4>
        <h4 className={classes.kegDetails}>APV: {props.keg.APV}</h4>
        <h4 className={classes.kegDetails}>IBU: {props.keg.IBU}</h4>
        <h4 className={classes.kegDetails}>Hops</h4>
        {props.keg.hops.map((hop, index) => {
          if (hop.length > 12) { hop = hop.slice(0, 12) + '..' }
          return (<h4 className={classes.hopDetails} key={index}>- {hop}</h4>)
        })}        
      </div>
    </div>
  );
}