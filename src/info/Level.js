import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [level, setLevel] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    console.log({
        level,
    });
  });

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Level</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={level}
          onChange={handleChange}
        >
          <MenuItem value={10}>초급</MenuItem>
          <MenuItem value={20}>중급</MenuItem>
          <MenuItem value={30}>고급</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
