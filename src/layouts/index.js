import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import './custom.css';

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Etcetera Design"
      meta={[
        { name: 'description', content: 'Freelance design by Stephanie Slater' },
        { name: 'keywords', content: 'freelance, design, stephanie, slater, etcetera, manchester, web, print, logo, app' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
