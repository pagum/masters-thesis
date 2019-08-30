import React from 'react';
import { AboutContainer } from './About.style';
import { CentredTypography } from '../Calculator/Calculator.style';

const About = () => (
  <AboutContainer>
    <CentredTypography variant="h5" id="tableTitle">
      About
    </CentredTypography>
    This application is part of the master's thesis entitled "supporting tool
    management in a production company based on the machining tools database"
    written at the Department of Machine Technology and Production Automation at
    the Faculty of Mechanical Engineering of the Gdańsk University of
    Technology.
  </AboutContainer>
);

export default About;
