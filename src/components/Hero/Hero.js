import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Bienvenido a <br/> mi portafolio personal</SectionTitle>
      <SectionText>El proposito de presentar tus proyectos en portafolios es mostrar al mundo de una forma mas atractiva lo que eres capaz de aprender y hacer</SectionText>
      <Button onClick={()=> window.location= 'https://pablo-portafolio.netlify.app/'}>Aprender Mas</Button>
    </LeftSection>
  </Section>
);

export default Hero;