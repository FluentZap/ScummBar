import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KegCard from '../kegcard/KegCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    height: '300px',
    backgroundColor: '#d7ccc887',
    margin: '30px auto',
    boxShadow: '4px 4px 10px black',
    display: 'flex',

  }
}));



export default function TapCategory(props) {
  const classes = useStyles();  

  return (
    <div className={classes.root}>
      <KegCard/>
      <KegCard />
      <KegCard />      
    </div>
  );
}