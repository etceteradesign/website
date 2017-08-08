import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.css';
import './custom.css';

import HeaderShelf from '../components/headerShelf';

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
    <section className="diagonal" style={{height: '100vh', background: '#eee'}}></section>
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
