# grunt-extendscript

Node module to run extendScript file in photoshop, indesign and illustrator.
The original module can be found [here](https://github.com/hanamura/grunt-extendscript)
This module works on Mac OS X and on Windows.

## Install

### Install nodes modules
```
sudo npm install
```

### Create a config.js file
Create a config.js file under your_extendscript-library.org_directory/tests/config.js.
You can use the exemple.config.js file, just change the name to config.js.
Use grunt to run units tests. Make sure that you have the same version of the Creative Suite that the version in the config.js file.
Otherwise you can change the config file:

```
config.apps.photoshop = 'Adobe Photoshop CC 2014';     // Adobe Photoshop CS6
config.apps.indesign = 'Adobe InDesign CC 2014';       // Adobe InDesign CS6
config.apps.illustrator = 'Adobe Illustrator CC 2014'; // Adobe Illustrator CS6

```

## Run tests
```
grunt --verbose
```

## Write tests
In the directory test/fixtures create a jsx file like the example fixtures/photoshop/document/test_document.jsx.
The tests work by this way:
  * run all extendscript tests -> put the result in the results folder <br>
    (if it's a file store the file in the tests/test/results folder, if it's a value write it in the tests/test/results/tests.xml file)

  * check the results with node-unit <br>
    (you can write tests in the tests/test/tests.js file)

![Alt text](https://github.com/bastienEichenberger/extendscript-library.org/blob/master/tests/documentation/images/test.jpg "Tests architecture")

## Author
  * Taro Hanamura
  * Bastien Eichenberger (add some modifications)