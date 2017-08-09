import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import './custom.css';

import HeaderShelf from '../components/headerShelf';
import ServicesShelf from '../components/servicesShelf';

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Etcetera Design"
      meta={[
        { name: 'description', content: 'Freelance design by Stephanie Slater' },
        { name: 'keywords', content: 'freelance, design, stephanie, slater, etcetera, manchester, web, print, logo, app' },
      ]}
    />
    <HeaderShelf />
    <ServicesShelf />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
