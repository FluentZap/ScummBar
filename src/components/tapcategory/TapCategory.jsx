import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KegCard from '../kegcard/KegCard';
import Keg, { colorCode } from '../../Keg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    height: '360px',
    backgroundColor: '#d7ccc887',
    margin: '30px auto',
    boxShadow: '4px 4px 10px black',
    display: 'flex',
  }
}));

export default function TapCategory(props) {
  const classes = useStyles();

  const kegs = [
    new Keg(
      'Skull Crusher', 'Ale', 30,
      new colorCode(120, 80, 80, 1),
      4.6, 80,
      [
        'Green Mountain',
        'Silver Coast',
        'Juice Orange'
      ],
      4.50, 7, 13),
    new Keg(
      'Storm', 'Porter', 80,
      new colorCode(80, 80, 120, 1),
      4.6, 80,
      [
        'Green Mountain',
        'Silver Coast',
        'Juice Orange'
      ],
      4.50, 7, 13),
    new Keg(
      'Greenskin', 'Sour', 43,
      new colorCode(80, 120, 80, 1),
      8.2, 40,
      [
        'Old Grape',
        'Pulled Sun',
        'Frost Wing',
        'Old Crazy'
      ],
      7, 13, 25)
  ]

  return (
    <div className={classes.root}>
      {kegs.map((element, index) => {
        return (<KegCard keg={element} key={index} />)
      })}
    </div>
  );
}