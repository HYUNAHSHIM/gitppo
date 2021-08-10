import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();
  const [start, setStart] = useState('');
  const onChangeStart = e => {
    setStart(e.target.value);
  };

  useEffect(()=>{
    console.log({
      start
    });
  });

  return (
    <form className={classes.container} noValidate>
      <TextField
        value={start}
        onChange={onChangeStart}  
        id="date"
        label="Start"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
