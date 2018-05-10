import React from 'react';
import './Resimage.css';

/*
 Standard image size available in server
 1280 * 720 = xl : extra large
 1024 * 600 = ls : large screen
 550 * 400 = tb : tablet
 480 * 320 = md : medium
 400 * 250 = ms : medium small
 320 * 240 = mo : mobile
 250 * 150 = sm : small
 90 * 60 = xs : extreme small
*/

const imageStandards = {
  xs: '90x60',
  sm: '250x150',
  mo: '320x240',
  ms: '400x250',
  md: '480x320',
  tb: '550x400',
  ls: '1024x600',
  xl: '1280x720'
};

const Resimage = props => {
  //.replace(/-/gi, " ")
  let imageName = props.data.substring(
    props.data.lastIndexOf('/') + 1,
    props.data.length - 4
  );
  let imgSource = props.data.replace(/1024x600/gi, imageStandards[props.size]);
  return (
    <img
      className={props.overlay ? 'resimage-overlay' : ''}
      alt={imageName}
      title={imageName}
      src={imgSource}
      height={props.height}
      width="100%"
    />
  );
};

export default Resimage;
