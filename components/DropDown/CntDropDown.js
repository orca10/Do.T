import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CntDropDown() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
      <InputLabel id="demo-select-small">분류</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={genre}
        label="Genre"
        onChange={handleChange}
      >
        <MenuItem value={1}>전체</MenuItem>
        <MenuItem value={2}>기획/아이디어</MenuItem>
        <MenuItem value={3}>광고/마케팅</MenuItem>
        <MenuItem value={4}>디자인</MenuItem>
        <MenuItem value={5}>IT/SW</MenuItem>
        <MenuItem value={6}>창업/스타트업</MenuItem>
        <MenuItem value={7}>기타</MenuItem>
      </Select>
    </FormControl>
  );
}
