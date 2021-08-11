import React, { useState, useEffect } from 'react';
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
  const [end, setEnd] = useState('');
  const onChangeEnd = e => {
    setEnd(e.target.value);
  };

  useEffect(()=>{
    console.log({
      end
    });
  });
  
  return (
    <form className={classes.container} noValidate>
      <TextField
        value={end}
        onChange={onChangeEnd}  
        id="date"
        label="End"
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
