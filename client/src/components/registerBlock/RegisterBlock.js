import React, { useEffect } from 'react';
import blockStyle from '../Block';
import { RegisterSection } from "./registerSegment/RegisterSection";
import "./RegisterBlock.css";
import '../Block.css'

function RegisterBlock() {
  return (
    <div style={blockStyle()} className="block" id="register-block">
      <div className="register-block">
        <h1 className="heading event-heading">Registration</h1>
        <RegisterSection />
      </div>
    </div>
  );
}

export default RegisterBlock;