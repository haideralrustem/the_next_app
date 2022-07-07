import {useState, useEffect} from 'react';
import throttle from 'lodash.throttle';

const getDeviceConfig = (width) => {
  if(width > 1 && width < 320) {
    return 'xs';
  } else if(width >= 320 && width < 720 ) {
    return 'sm';
  } else if(width >= 720 && width < 1024) {
    return 'md';
  } else if(width >= 1024) {
    return 'lg';
  }
  
};


export default getDeviceConfig;