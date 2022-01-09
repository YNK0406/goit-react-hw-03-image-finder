import React from 'react'; 
import PropTypes from 'prop-types';
import s from './Section.module.scss'

const Section = ({ children }) => {
  return (
    <section className={s.Section}>
      
        {children}
      
    </section>
  )
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;