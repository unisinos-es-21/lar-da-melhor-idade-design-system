const replace = require('@rollup/plugin-replace');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

module.exports = {
  rollup(config, opts) {
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env),
            preventAssignment: true
          })
        : p
    );

    config.plugins.push(
      postcss({
        plugins: [autoprefixer(), postcssImport(), tailwindcss()],
        inject: true
      })
    );

    return config;
  }
};
