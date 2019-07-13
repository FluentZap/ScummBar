import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BannerScroll from '../../assets/bannerSmall.png'
import FilledInput from '@material-ui/core/FilledInput';

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
  kegTitleEdit: {
    flexGrow: 1,
    textAlign: "center",
    fontFamily: `'Quintessential', cursive`,
    fontSize: '21px',
    marginTop: '-62px',  
    fontWeight: "bold",
    display: 'block',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
    '& input': {
      // marginTop: '-62px',  
      padding: 0,
      textAlign: 'center'
    }
  }
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;


export default function BannerTitle(props) {
  const classes = useStyles();  
  return (
    <div className={classes.root}>
      <img src={BannerScroll} alt="Banner Scroll" />
      { props.kegEdit === true ?
        <FilledInput defaultValue={props.name} className={classes.kegTitleEdit} margin="none" variant="filled" /> :
        <h5 className={classes.beerName}>{props.name}</h5>
      }      
      
    </div>
  );
}