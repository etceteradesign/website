const Path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.merge({
        resolve: {
            alias: {
                "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-css':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-html':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;

    case 'build-javascript':

      config.merge({
        resolve: {
            alias: {
                "TweenLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
                "TweenMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
                "TimelineLite": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
                "TimelineMax": Path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
                "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.gsap": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
                "debug.addIndicators": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
        }
      });

      break;
  }

  return config;
};