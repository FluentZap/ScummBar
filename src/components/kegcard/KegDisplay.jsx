import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Keg from '../../assets/keg.png'
import KegMask from '../../assets/kegMask2.png'
import { colorCode } from '../../App';

export default function KegDisplay(props) {
  const percentage = 100 - ((props.quantity / 124) * 100);
  const color = props.color;
  
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100px',
      height: '146px',
      float: 'left',
      // backgroundImage: `url('${Keg}')`,
      maskImage: `url('${KegMask}')`,
      background: `url('${Keg}'), linear-gradient(180deg, #00000000, #00000000 ${percentage - 2}%, rgba(${color.r},${color.g},${color.b},${color.a}) ${percentage}%, rgba(${color.r / 5},${color.g / 5},${color.b / 5},${color.a}) 100%)`,
      maskSize: 'contain',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: '0px 5px',
    },
  }));


  const classes = useStyles();
  return (
    <div className={classes.root}>      
    </div>
  );
}