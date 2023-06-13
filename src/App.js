import React, { useState } from 'react';
import "./App.css"
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import Footer from './Footer';

function BaseConverter() {
  const [number, setNumber] = useState('');
  const [sourceBase, setSourceBase] = useState(10);
  const [targetBase, setTargetBase] = useState(2);
  const [convertedNumber, setConvertedNumber] = useState('');

  const convertNumber = () => {
    const decimalNumber = parseInt(number, sourceBase);
    const convertedNumber = decimalNumber.toString(targetBase);
    setConvertedNumber(convertedNumber.toUpperCase());
  };

  const swapBases = () => {
    const tempNumber = parseInt(number, sourceBase);
    setNumber(tempNumber.toString(targetBase));
    setSourceBase(targetBase);
    setTargetBase(sourceBase);
  };

  return (
    <>
      <div className="base-converter-container">
        <h1 className="heading">Base Converter</h1>
        <div className="input-container">
          <label htmlFor="number" className="label">
            Number:
          </label>
          <input
            type="text"
            id="number"
            className="input-field"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="sourceBase" className="label">
            Source Base:
          </label>
          <select
            id="sourceBase"
            className="select-field"
            value={sourceBase}
            onChange={(e) => setSourceBase(parseInt(e.target.value))}
          >
            <option value={2}>Binary (2)</option>
            <option value={8}>Octal (8)</option>
            <option value={10}>Decimal (10)</option>
            <option value={16}>Hexadecimal (16)</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="targetBase" className="label">
            Target Base:
          </label>
          <select
            id="targetBase"
            className="select-field"
            value={targetBase}
            onChange={(e) => setTargetBase(parseInt(e.target.value))}
          >
            <option value={2}>Binary (2)</option>
            <option value={8}>Octal (8)</option>
            <option value={10}>Decimal (10)</option>
            <option value={16}>Hexadecimal (16)</option>
          </select>
        </div>
        <div className="button-container">
         
          <Button size='large' variant="contained" endIcon={<ArrowCircleRightIcon  />} className="convert-button" onClick={convertNumber}>
            Convert
          </Button>
         
          <Button  size='large' variant="contained"  startIcon={<SwapVerticalCircleIcon />} className="swap-button" onClick={swapBases}>
            Swap
          </Button>
        </div>
        <div className="output-container">
          <label htmlFor="convertedNumber" className="output-label">
            Converted Number:
          </label>
          <input
            type="text"
            id="convertedNumber"
            className="output-field"
            value={convertedNumber}
            readOnly
          />
        </div>

        <Footer />
      </div>

    </>
  );
}

export default BaseConverter;
