# extendscript-library.org

This library is under active development.

For more information go to our website
[extendscript-library.org!](http://www.extendscript-library.org)

## Architecture:

### packages
1. lib
  * helper (modules with functionality that could be use in other apps)
  * illustrator (modules for illustrator including the common packages)
  * indesign (modules for indesign including the common packages)
  * photoshop (modules for photoshop including the common packages)

### Use the library

#### Include the library
```
//if you use photoshop lib -> add the target photoshop
//you can use the @include syntax to use extendscript in an other IDE without error

//@target "photoshop"
//@include "../../../../../../lib/photoshop/photoshop-lib.jsx"


```

## Contribute


### Install node js
  * install node js (http://nodejs.org/download/)
  * install node modules:
  ```
  // install node modules for the documentation
  cd your_extendscript-library.org_directory
  sudo npm install

  // install node modules for the tests
  cd your_extendscript-library.org_directory/tests
  sudo npm install

  ```


### Generate the documentation
Use jsdoc3 to generate the documentation

```
cd your_extendscript-library.org_directory
./node_modules/.bin/jsdoc lib/* -c conf.json documentation/doc.md -d documentation/html_doc
```


### Tests
Create a config.js file under your_extendscript-library.org_directory/tests/config.js.
You can use the exemple.config.js file, just change the name to config.js.
Use grunt to run units tests. Make sure that you have the Creative Suite CC installed.
Otherwise you can change the config file:
```
var config = {};
config.app = {};

config.app.photoshop = 'Adobe Photoshop CS6'; // Adobe Photoshop CC 2014
config.app.indesign = 'Adobe InDesign CS6'; // Adobe InDesign CC 2014
config.app.illustrator = 'Adobe Illustrator CS6'; // Adobe Illustrator CC 2014

module.exports = config;
```

#### Run the tests
Create a config.js file under your_extendscript-library.org_directory/tests/config.js.
You can use the exemple.config.js file, just change the name to config.js.
```
cd your_extendscript-library.org_directory/tests
grunt --verbose
```

#### Write tests
To write your own tests follow this [section](https://github.com/bastienEichenberger/extendscript-library.org/tree/master/tests)

### IDE
If you don't like to use the ExtendScript Toolkit to write your scripts, you can use the excellent WebStorm IDE.
If you will participate in this project you can write to me an email to receive a free open-source licence.
First download WebStorm IDE [here](https://www.jetbrains.com/webstorm/download/)

#### Add autocompletion to WebStorm
If you would like to add the autocompletion in WebStorm you can follow this [projet](https://github.com/yearbookmachine/extendscript-api-documentation).
Download precompiled libraries and setup WebStorm by the way described in the section "Documentation and autocomplete in IDEs"
                                                                                      
### Useful Resources

#### Tutorials
  * [tutorial about extendscript (in french)](https://openclassrooms.com/courses/ecrivez-des-scripts-en-extendscript)

  * [for more samples go to the section public-script](public-scripts)


#### ExtendScript documentation
  * [yearbookmachine documentation](http://yearbookmachine.github.io/esdocs/#/)
  
  * [jongware documentation](http://jongware.mit.edu/)
  
#### Others ressources
  
  * [InDesign scripting forum](https://forums.adobe.com/community/indesign/indesign_scripting)
  
  * [InDesign sdk](http://www.adobe.com/devnet/indesign/sdk.html)

  * [Read more about Module Pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
  
## Grateful
### Contributors
  * [Jonas Oesch](https://github.com/jonasoesch)
  * [Maya Jeanmonod](https://github.com/may0u)


