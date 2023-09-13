import React from 'react'
import ProducDetailtpage from '../pages/ProducDetailtpage'
import {Navigate } from 'react-router-dom';
function Private({authenticate}) {
  return authenticate == true? <ProducDetailtpage/>:<Navigate to='/pages/Login'/>
}

export default Private