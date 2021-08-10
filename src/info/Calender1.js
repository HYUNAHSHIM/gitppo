import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./index.css"

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
  const [birth, setBirth] = useState("");
  const onChangeBirth = e => {
    setBirth(e.target.value);
  };

  useEffect(()=>{
    console.log({
      birth
    });
  });

  return (
    <div className="birthStyle">
      <form className={classes.container} noValidate>     
        <TextField
          value={birth}
          onChange={onChangeBirth}
          id="date"
          label="Birth"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
