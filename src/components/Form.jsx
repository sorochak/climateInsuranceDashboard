import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './Form.css';
import TransitionModal from './TransitionModal';

const Form = () => {
  const [file, setFile] = useState('');
  const [formData, setFormData] = useState({
    targetKind: 'FCT',
    baselineYearFrom: '',
    baselineYearTo: '',
    targetYearFrom: '',
    targetYearTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData['file'] = file;

    try {
      const response = await fetch('http://127.0.0.1:5000/adjust', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const yltAdjusted = await response.json();
      console.log('yltAdjusted: ', yltAdjusted);
    } catch (err) {
      console.error('Post YLT Error: ', err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input-container">
        <div>
          <label className="input-label" htmlFor="ylt-file">
            YLT File
          </label>
          <TransitionModal id="ylt-file" file={file} setFile={setFile} />
        </div>

        {/* Target Kind */}
        <div>
          <label htmlFor="target-kind">Target Kind</label>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              id="target-kind"
              name="targetKind"
              onChange={handleChange}
              value={formData.targetKind}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              style={{
                background: 'white',
                boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
              }}
            >
              <MenuItem value="FCT">FCT</MenuItem>
              <MenuItem value="CLIMATO">CLIMATO</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="input-baseline-target-years">
          {/* Baseline Years */}
          <div>
            <label>Select Baseline Years (Optional)</label>
            <div>
              <TextField
                hiddenLabel
                type="number"
                name="baselineYearFrom"
                onChange={handleChange}
                value={formData.baselineYearFrom}
                style={{
                  background: 'white',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                }}
                placeholder="2022"
              />
              <TextField
                hiddenLabel
                type="number"
                name="baselineYearTo"
                onChange={handleChange}
                value={formData.baselineYearTo}
                style={{
                  background: 'white',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                }}
                placeholder="None"
              />
            </div>
          </div>

          {/* Target Years */}
          <div>
            <label>Select Target Years (Optional)</label>
            <div>
              <TextField
                hiddenLabel
                type="number"
                name="targetYearFrom"
                onChange={handleChange}
                value={formData.targetYearFrom}
                placeholder="2022"
                style={{
                  background: 'white',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                }}
              />
              <TextField
                hiddenLabel
                type="number"
                name="targetYearTo"
                onChange={handleChange}
                value={formData.targetYearTo}
                placeholder="None"
                style={{
                  background: 'white',
                  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
