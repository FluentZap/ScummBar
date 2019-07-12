import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Keg from '../../assets/keg.png'
import KegMask from '../../assets/kegMask2.png'

const useStyles = makeStyles(theme => ({
  root: {
    gridColumn: '1 / 2',
    gridRow: '3 / span 7',
    maskImage: `url('${KegMask}')`,
    maskSize: 'contain',
    maskRepeat: 'no-repeat',    
    backgroundSize: 'contain!important',
    backgroundRepeat: 'no-repeat!important',
    margin: 0,
  },
}));

export default function KegDisplay(props) {
  const percentage = 100 - ((props.quantity / 124) * 100);
  const color = props.color;
  
  const style = {background: `url('${Keg}'), linear-gradient(180deg, #00000000, #00000000 ${percentage - 2}%, rgba(${color.r},${color.g},${color.b},${color.a}) ${percentage}%, rgba(${color.r / 5},${color.g / 5},${color.b / 5},${color.a}) 100%)`}



  const classes = useStyles();
  return (
    <div className={classes.root} style={style}>
    </div>
  );
}