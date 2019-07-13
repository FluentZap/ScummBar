import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BannerTitle from './BannerTitle';
import KegDisplay from './KegDisplay';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';



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
  kegEditFields: {
    textAlign: "center",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
    height: '24px',
    width: '95%',
    marginRight: 'auto',
    '& input': {
      padding: 0,
      textAlign: 'center'
    }
  },
  kegEditQuantity: {
    textAlign: "center",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
    height: '24px',
    width: '80px',
    marginRight: 'auto',
    '& input': {
      padding: 0,
      textAlign: 'center'
    }
  },
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;


export default function KegCardEdit(props) {
  const classes = useStyles();

  // const [labelWidth, setLabelWidth] = React.useState(0);
  // const [name, setName] = React.useState('Composed TextField');
  // const labelRef = React.useRef(null);
  

  // React.useEffect(() => {
  //   setLabelWidth(labelRef.current.offsetWidth);
  // }, []);

  // function handleChange(event) {
  //   setName(event.target.value);
  // }


  if (props.keg.hops.length > 3) {
    props.keg.hops = props.keg.hops.slice(0, 3);
  }
  console.log(props.keg.hops)
  return (
    <div className={classes.root}>
      <div className={classes.card}>

        <BannerTitle name={props.keg.name} />      
        <div className={classes.quantity}>
          <FilledInput defaultValue={props.keg.quantity} className={classes.kegEditQuantity} margin="none" variant="filled" />
        </div>        
        <KegDisplay
          quantity={props.keg.quantity}
          color={props.keg.color} />
        <FilledInput defaultValue={props.keg.style} className={classes.kegEditFields} margin="none" variant="filled" />
        
        <FilledInput defaultValue={props.keg.APV} className={classes.kegEditFields} margin="none" variant="filled" />
        <FilledInput defaultValue={props.keg.IBU} className={classes.kegEditFields} margin="none" variant="filled" />        
        <h4 className={classes.kegDetails}>Hops</h4>

        {/* <h4 className={classes.kegDetails}>Style: {props.keg.style}</h4>
        <h4 className={classes.kegDetails}>APV: {props.keg.APV}</h4>
        <h4 className={classes.kegDetails}>IBU: {props.keg.IBU}</h4>
        <h4 className={classes.kegDetails}>Hops</h4> */}        
        <FilledInput defaultValue={props.keg.hops.length > 0 ? props.keg.hops[0] : ''} className={classes.kegEditFields} margin="none" variant="filled" />
        <FilledInput defaultValue={props.keg.hops.length > 1 ? props.keg.hops[1] : ''} className={classes.kegEditFields} margin="none" variant="filled" />
        <FilledInput defaultValue={props.keg.hops.length > 2 ? props.keg.hops[2] : ''} className={classes.kegEditFields} margin="none" variant="filled" />
        
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