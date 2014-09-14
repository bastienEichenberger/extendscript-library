# grunt-extendscript

> Execute ExtendScript (.jsx) files.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-extendscript --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-extendscript');
```

## The "extendscript" task

### Overview
In your project's Gruntfile, add a section named `extendscript` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  extendscript: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.app
Type: `String`
Default value: `Adobe Photoshop CS6`

Application name.

#### options.args
Type: `Array`
Default value: `[]`

Arguments passed to script.

### Usage Examples

```js
var path = require('path');
grunt.initConfig({
  extendscript: {
    options: {
      app: 'Adobe Photoshop CS6',
      args: [path.resolve('img')]
    },
    src: ['resize.jsx', 'sharpen.jsx'],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
