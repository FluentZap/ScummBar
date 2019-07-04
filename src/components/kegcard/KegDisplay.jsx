import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Keg from '../../assets/keg.png'
import KegMask from '../../assets/kegMask2.png'

class colorCode {
  r; g; b;
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

const percentage = 100 -((62 / 124) * 100);
const color = new colorCode(170, 224, 100, 1)

const useStyles = makeStyles(theme => ({
  root: {
    width: '100px',
    height: '146px',
    float: 'left',
    // backgroundImage: `url('${Keg}')`,
    maskImage: `url('${KegMask}')`,
    background: `url('${Keg}'), linear-gradient(180deg, #00000000, #00000000 ${percentage - 2}%, rgba(${color.r},${color.g},${color.b},${color.a}) ${percentage}%, rgba(${color.r / 10},${color.g / 10},${color.b / 10},${color.a}) 100%)`,
    maskSize: 'contain',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: '0px 5px',      
  },
}));


export default function KegDisplay(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>      
    </div>
  );
}