import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function priorityDropDown() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
      <InputLabel id="demo-select-small">최신순</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={genre}
        label="Genre"
        onChange={handleChange}
      >
        <MenuItem value={1}>최신순</MenuItem>
        <MenuItem value={2}>마감순</MenuItem>
        <MenuItem value={3}>인기순</MenuItem>
        <MenuItem value={4}>조회순</MenuItem>
      </Select>
    </FormControl>
  );
}
