const path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.merge({
        resolve: {
            alias: {
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-css':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-html':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-javascript':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;
  }

  return config;
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
