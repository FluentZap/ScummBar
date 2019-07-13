import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BannerTitle from './BannerTitle';
import KegDisplay from './KegDisplay';
import { SketchPicker } from 'react-color';

import FilledInput from '@material-ui/core/FilledInput';
import { colorCode } from '../../Keg';

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
    fontWeight: "bold",
    textAlign: 'center',
    width: '60px',
    '& input': {
      padding: 0,
      textAlign: 'center'
    }
  },
  kegEditFields: {
    textAlign: "center",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
    fontWeight: "bold",
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
    fontFamily: `'Quintessential', cursive`,
    fontSize: '18px',
    height: '26px',
    width: '80px',
    marginRight: 'auto',
    fontWeight: "bold",
    '& input': {
      padding: 0,
      textAlign: 'center'
    }
  },
  kegEditPrice: {
    textAlign: "center",
    margin: '0px',
    fontFamily: `'Risque', cursive`,
    fontSize: '18px',
    fontWeight: "bold",
    height: '24px',
    width: '40px',
    marginRight: 'auto',
    '& input': {
      padding: 0,
      textAlign: 'center'
    }
  },
  picker: {
    position: 'absolute',
    zIndex: 1000,
    marginTop: 304
  },
}));
// font-family: 'Quintessential', cursive;
// font-family: 'Risque', cursive;



export default function KegCardEdit(props) {
  const classes = useStyles();
  function setHops(i, value) {
    let newArr = [...props.keg.hops];
    newArr[i] = value;
    return newArr;
  }

  function updateColor(color, event) {
    let newColor = new colorCode(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a);
    props.setUpdatedKeg({...props.keg, color: newColor});
    setNewColor(color);
  }
  const [newColor, setNewColor] = useState(props.keg.color);

  return (
      <div className={classes.root}>
      <SketchPicker className={classes.picker} color={newColor} onChange={color => setNewColor(color)} onChangeComplete={updateColor}/>
        <div className={classes.card}>

          <BannerTitle keg={props.keg} kegEdit={true} setUpdatedKeg={props.setUpdatedKeg} />
          <div className={classes.quantity}>
            <FilledInput defaultValue={props.keg.quantity} className={classes.kegEditQuantity} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, quantity: event.target.value })} />
          </div>
          <KegDisplay
            quantity={props.keg.quantity}
            color={props.keg.color}
          />
          <FilledInput defaultValue={props.keg.style} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, style: event.target.value })} />

          <FilledInput defaultValue={props.keg.APV} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, APV: event.target.value })} />
          <FilledInput defaultValue={props.keg.IBU} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, IBU: event.target.value })} />
          <h4 className={classes.kegDetails}>Hops</h4>

          <FilledInput defaultValue={props.keg.hops[0]} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, hops: setHops(0, event.target.value) })} />
          <FilledInput defaultValue={props.keg.hops[1]} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, hops: setHops(1, event.target.value) })} />
          <FilledInput defaultValue={props.keg.hops[2]} className={classes.kegEditFields} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, hops: setHops(2, event.target.value) })} />

          <div className={classes.priceHeading}>
            <h4 className={classes.prices}>16 oz</h4>
            <h4 className={classes.prices}>32 oz</h4>
            <h4 className={classes.prices}>64 oz</h4>
          </div>
          <div className={classes.priceHeading}>
            <FilledInput defaultValue={props.keg.price16} className={classes.prices} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, price16: event.target.value })} />
            <FilledInput defaultValue={props.keg.price32} className={classes.prices} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, price32: event.target.value })} />
            <FilledInput defaultValue={props.keg.price64} className={classes.prices} margin="none" variant="filled" onChange={(event) => props.setUpdatedKeg({ ...props.keg, price64: event.target.value })} />
          </div>
        </div>
      </div>
    );
  }