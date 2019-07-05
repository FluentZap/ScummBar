import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BannerTitle from './BannerTitle';
import KegDisplay from './KegDisplay';

const useStyles = makeStyles(theme => ({
  root: {
    width: '230px',
    height: '300px',
    backgroundColor: '#795548',
    marginBottom: '10px',    
    boxShadow: '4px 4px 10px black',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'grid',
    gridTemplate: '40px 35px repeat(9, 23px) / 110px 110px',
    width: '220px',
    height: '290px',
    backgroundColor: '#A1887F',    
    borderRadius: '5px',
    '& img': {
      width: '214px',
      margin: '5px 3px',
    },
  },
  quantity: {
    gridColumn: '1 / 3',
    gridRow: '2 / 3',
    textAlign: "center",
    margin: 0,
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
  priceHeading: {
    gridColumn: '1 / 3',
    gridRow: 'span 1',
    display: 'flex',
    fontFamily: `'Risque', cursive`,
    fontSize: '14px',
    justifyContent: 'space-around',
  },
  prices: {
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
    width: '60px',
    textAlign: 'center'
  },  
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;


export default function KegCard(props) {
  const classes = useStyles();
  if (props.keg.hops.length > 3) {
    props.keg.hops = props.keg.hops.slice(0, 3);
  }
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <BannerTitle name={props.keg.name} />
        <h3 className={classes.quantity}>{props.keg.quantity} / 124</h3>
        <KegDisplay
          quantity={props.keg.quantity}
          color={props.keg.color} />
        <h4 className={classes.kegDetails}>Style: {props.keg.style}</h4>
        <h4 className={classes.kegDetails}>APV: {props.keg.APV}</h4>
        <h4 className={classes.kegDetails}>IBU: {props.keg.IBU}</h4>
        <h4 className={classes.kegDetails}>Hops</h4>
        {props.keg.hops.map((hop, index) => {
          if (hop.length > 12) { hop = hop.slice(0, 12) + '..' }
          return (<h4 className={classes.hopDetails} key={index}>- {hop}</h4>)
        })}
        <div className={classes.priceHeading}>
          <h4 className={classes.prices}>16 oz</h4>
          <h4 className={classes.prices}>32 oz</h4>
          <h4 className={classes.prices}>64 oz</h4>
        </div>
        <div className={classes.priceHeading}>
          <h4 className={classes.prices}>${props.keg.price16}</h4>
          <h4 className={classes.prices}>${props.keg.price32}</h4>
          <h4 className={classes.prices}>${props.keg.price64}</h4>
        </div>
      </div>
    </div>
  );
}